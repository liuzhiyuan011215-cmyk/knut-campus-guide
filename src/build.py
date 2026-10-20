"""src/template.html + src/app.js + src/data.json + assets/*.jpg -> index.html (단일 파일, 서버 불필요)

실행: python3 src/build.py
"""
import base64, io, json, pathlib, shutil
from PIL import Image

ROOT = pathlib.Path(__file__).resolve().parent.parent
DESKTOP_COPY = pathlib.Path("/Users/wangyanan/Desktop/周二三晚_AI数据叙事与VibeCoding/index.html")

# 장소 id -> 네이버 플레이스 실사진 (assets/*_editorial.jpg 는 AI 생성 이미지라 사용하지 않음)
# 2024년 이후 게시된 사진만 사용 (오래된 사진은 지금 모습과 달라 쓰지 않음)
PHOTOS = {1: "burrito_food.jpg", 2: "haekbap.jpg", 3: "hakgwan_cafeteria.jpg", 4: "liming.jpg",
          5: "gwonjjamppong.jpg", 6: "gamjatang.jpg", 7: "staff_cafeteria.jpg", 8: "ilmi_dakgalbi.jpg",
          26: "kinoya.jpg", 51: "bongousse.jpg", 55: "malatang.jpg", 65: "sinjeon_food.jpg",
          96: "hoamji.jpg", 103: "library_stacks.jpg", 104: "library_room.jpg", 106: "stadium.jpg",
          147: "ediya.jpg", 154: "w5_exterior.jpg"}


def data_uri(name):
    im = Image.open(ROOT / "assets" / name).convert("RGB")
    im.thumbnail((560, 560))
    buf = io.BytesIO()
    im.save(buf, "JPEG", quality=78, optimize=True, progressive=True)
    return "data:image/jpeg;base64," + base64.b64encode(buf.getvalue()).decode()


data = json.loads((ROOT / "src/data.json").read_text())
assert len(data["places"]) == 178 and sum(p["recs"] for p in data["places"]) == 250
assert len(data["tips"]) == 5

html = (ROOT / "src/template.html").read_text()
html = html.replace("/*__APP__*/", (ROOT / "src/app.js").read_text())
html = html.replace("/*__DATA__*/null", json.dumps(data, ensure_ascii=False, separators=(",", ":")))
html = html.replace("/*__PHOTOS__*/{}", json.dumps({k: data_uri(v) for k, v in PHOTOS.items()}))
assert "/*__" not in html

out = ROOT / "index.html"
out.write_text(html)
if DESKTOP_COPY.parent.exists():
    shutil.copyfile(out, DESKTOP_COPY)
print(f"index.html {len(html)//1024} KB")
