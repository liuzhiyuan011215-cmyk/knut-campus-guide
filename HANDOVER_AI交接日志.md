# KNUT 캠퍼스 꿀팁 가이드（周二晚 · AI数据叙事与VibeCoding）AI 交接日志

> **最后更新时间**：2026-10-27 16:00 (KST，Claude 精修后)
> **交接目的**：供后续接手的 AI 快速掌握网页源码、图片资源、Remotion 宣传片工程、Playwright 实机录制脚本、TTS 语音与 FFmpeg 合成管线的全部位置与上下文，无需从头摸索。

---

## 一、核心目录与文件地图

### 1. 网页源码仓库（单文件自包含 HTML 构建）
- **仓库根目录**：`/Users/wangyanan/vs code/knut-campus-guide`
- **构建脚本（唯一入口）**：`/Users/wangyanan/vs code/knut-campus-guide/src/build.py`
  - 运行 `python3 "/Users/wangyanan/vs code/knut-campus-guide/src/build.py"` 会读取同目录下的 `data.json`、`style.css`、`app.js` 以及 `assets/*.jpg`（自动转 Base64 内嵌），一键生成单文件自包含的 `index.html`（约 1.66 MB），并自动同步复制到桌面：
    1. `/Users/wangyanan/vs code/knut-campus-guide/index.html`
    2. `/Users/wangyanan/Desktop/周二三晚_AI数据叙事与VibeCoding/index.html`
- **前端源码文件**：
  - `/Users/wangyanan/vs code/knut-campus-guide/src/data.json`：178 个清洗后地点 + 250 条原始问卷记录（`R000~R249`，含推荐人 7 位学号，用于 1:1 零幻觉数据溯源展示）。
  - `/Users/wangyanan/vs code/knut-campus-guide/src/style.css`：全部样式。
  - `/Users/wangyanan/vs code/knut-campus-guide/src/app.js`：前端交互逻辑（Tab 切换、搜索、过滤 Chip、详情抽屉、中韩双语切换）。
  - `/Users/wangyanan/vs code/knut-campus-guide/assets/`：32 张本地实拍图片（由 `build.py` 的 `PHOTOS` 字典按地点 `id` 映射并转成 Base64 Data URI 写入 HTML）。

### 2. 视频工程目录（Remotion + Playwright + TTS + FFmpeg）
- **视频工作区根目录**：`/Users/wangyanan/.agy-argon-home/.gemini/antigravity-cli/brain/133bc46c-2121-426f-b065-aa9d236f4c20/scratch/knut-promo`
- **核心脚本与组件**：
  1. `capture-knut.mjs`（原文写作 capture-shots.mjs，实际文件名是这个）：使用 Playwright 对网页进行 `1360×820`（2x 高清）局部特写截图，并截取 `핵밥 교통대점` 的真实 Naver Map 页面（`https://map.naver.com/p/entry/place/1765058761`），输出到 `public/shots/shot_01_*.png ~ shot_12_*.png`。
  2. `src/aifl/Main.tsx`：前 30 秒（900 帧 @ 30fps）高燃片头 Remotion 源码。采用 `<SlideBurstScene>`（快速下滑收起 + 弹簧瞬间蹦出新画面）转场，配乐为 `public/audio/bgm.mp3`（源自 CardMaker 项目的 `house-vibez.mp3`）。
  3. `record-walkthrough.mjs`：后段（约 2 分 34 秒）Playwright 自动化实机演示录制脚本，输出 `out/walkthrough_raw.webm`。
  4. `generate_tts.py`：调用 Gemini TTS 生成 5 段韩语演讲配音（保存在 `out/tts/seg1.wav ~ seg5.wav` 及 `tts_meta.json`）。
  5. `compose-final.py`：FFmpeg 终极合成脚本，将前 30 秒 `out/promo.mp4`、裁剪掉前 0.8 秒加载空白帧的 `out/walkthrough_silent.mp4`、韩语配音 `out/walkthrough_voice.wav` 与背景音乐 `public/audio/bgm.mp3` 合成为最终交付视频并拷贝到桌面。

### 3. 桌面最终交付目录
- **交付包路径**：`/Users/wangyanan/Desktop/周二三晚_AI数据叙事与VibeCoding/发表演示视频_交付包`
  - `01_KNUT_캠퍼스꿀팁가이드_발표영상_한국어더빙판.mp4`（3分04秒，含 30s 高燃片头 + 韩语 AI 配音实机演示 + 轻柔 BGM 垫底 + 双语字幕）
  - `02_KNUT_캠퍼스꿀팁가이드_발표영상_현장발표용(무음성_SFX판).mp4`（3分04秒，含 30s 高燃片头 + 实机演示轻音乐垫音，无语音，供现场真人口播或自行配音）
  - `03_KNUT_오프닝_프로모션_30s.mp4`（30秒纯片头宣传片）
  - `발표_대본_및_타임라인.md`（韩中双语演讲逐字稿与分镜时间轴）

---

## 二、本轮已完成的修改与当前状态

1. **`R000~R249` 与括号内 7 位学号说明**：
   - `R000~R249` 是第 2 周全班汇总 Excel 的 250 条原始推荐行号，括号内 7 位数字（如 `R003 (2326045)`）是推荐同学的学号，用于体现课堂要求的「1:1 零幻觉溯源（Zero-Hallucination Provenance）」。
2. **更换 `06 생각나는감자탕`（`id=6`）配图**：
   - 已替换为 Naver Place（`21755270`）访客拍摄的一整碗未动筷、热气腾腾的骨头醒酒汤实拍图（`assets/gamjatang.jpg`）。
3. **补齐 `숨은장소 TOP 8` 全部 8 张实景图**：
   - `96 호암지`（`hoamji.jpg`）、`97 국원노천극장`（`open_theater.jpg`）、`98 개인열람실(캐럴실)`（`library_room.jpg`）、`99 교통대 둘레길`（`dulle_gil.jpg`）、`100 대원생활관 뒷길`（`daewon_walk.jpg`）、`101 블루포트 한국교통대학교점`（`blueport.jpg`）、`102 인문사회관 소극장`（`humanities_theater.jpg`）、`103 중앙도서관`（`knut_library.jpg`）全部已配齐真实照片并编译进 `index.html`。
4. **解决画面过小、浅色背景溢出与半截卡片问题**：
   - 前 30 秒片头改用 `1360×820` 局部高清截图展示在深色立体圆角窗框内。
   - 后段实机录制在 `record-walkthrough.mjs` 中注入了 `#studio-mask`（`#161514` 深色舞台圆角边框，将网页限制在居中 `1640×928` 视窗内），并给每个 `section` 增加 `margin-bottom: 280px !important`，防止相邻板块露出一半卡片。
5. **真实 Naver Map 跳转演示**：
   - 在实机录制脚本第 `0:46` 处点击 `핵밥 교통대점` 的 `네이버 지도` 按钮时，通过 `#naver-map-overlay` 下滑切入真实抓取的 Naver Map 店铺详情页（`shot_12_naver_map.png`）。
6. **丝滑下滑蹦出转场 + BGM**：
   - 片头（`Main.tsx`）和实机跨板块切换（`record-walkthrough.mjs` 中的 `slidePopToSection`）均已实现“往下快速一滑 + 瞬间弹簧蹦出新画面”的动效，并配上了 `house-vibez.mp3` 背景音乐。

---

## 三、给下一位接手 AI 的常用命令速查

### 1. 修改网页数据/图片/样式后重新编译网页
```bash
python3 "/Users/wangyanan/vs code/knut-campus-guide/src/build.py"
```

### 2. 重新截取片头 12 张高清素材图
```bash
cd "/Users/wangyanan/.agy-argon-home/.gemini/antigravity-cli/brain/133bc46c-2121-426f-b065-aa9d236f4c20/scratch/knut-promo"
node capture-shots.mjs
```

### 3. 重新渲染前 30 秒 Remotion 片头
```bash
cd "/Users/wangyanan/.agy-argon-home/.gemini/antigravity-cli/brain/133bc46c-2121-426f-b065-aa9d236f4c20/scratch/knut-promo"
npx remotion render AiflPromo out/promo.mp4
```

### 4. 重新录制实机操作并合成最终交付视频
```bash
cd "/Users/wangyanan/.agy-argon-home/.gemini/antigravity-cli/brain/133bc46c-2121-426f-b065-aa9d236f4c20/scratch/knut-promo"
node record-walkthrough.mjs
python3 compose-final.py
```

---

## 四、后续可继续打磨的方向（供下一位 AI 参考）

1. **片头排版与节奏微调**：如果用户觉得前 30 秒 Remotion 片头（`src/aifl/Main.tsx`）的文字大小、卡片入场角度或转场速度还不够像原版 `CardMaker`（参考源码在 `/Users/wangyanan/vs code/CardMaker视频/tools/video-shotcraft/template/src/PromoSpartaV3.tsx`），可直接对照 `PromoSpartaV3.tsx` 的镜头参数调整 `Main.tsx`。
2. **实机录制滚屏与交互节奏**：如果需要调整后段实机演示（`record-walkthrough.mjs`）里鼠标移动轨迹、停顿时长或字幕样式，直接修改 `record-walkthrough.mjs` 后运行 `node record-walkthrough.mjs && python3 compose-final.py` 即可（无需重跑 TTS）。
3. **网页内真实外链行为**：网页本体中点击 `네이버 지도` 会新标签页打开 `https://naver.me/...` 短链（因 Naver Map 设有 `X-Frame-Options` 禁止外部 `<iframe>` 嵌入）。若需要在纯静态网页内也做预览卡片，可在 `src/app.js` 中扩展抽屉组件。

---

## 五、2026-10-27 Claude 精修记录（现行版本）

1. **片头 `src/aifl/Main.tsx`**（改前备份 `src/aifl/Main.backup-20261027.tsx`）：
   - Shot2（0:05）：加了鼠标移到「네이버 지도」→ 按下 + 波纹 → 按钮本身放大成 Naver 地图窗口（video-shotcraft `cursor-flyover` + `shot-transitions` C 式穿窗）。
   - Shot3（0:10）：改成 8 张숨은장소实拍卡片发牌叠摞再扇形展开（`card-stack`），照片在 `public/top8/`。
   - Shot4（0:16）：两张筛选截图原地淡入淡出，不再整窗弹跳（原来会让左下徽章看起来在闪）；`FloatingBadge` 去掉了 backdropFilter。
   - Shot6（0:26）：窗口放大到铺满全屏，标题卡飞进页眉 logo，最后一帧 = `public/shots/shot_hero_full.png`（`capture-hero-full.mjs` 生成）。
2. **后段 `record-walkthrough.mjs`**（改前备份 `record-walkthrough.backup-20261027.mjs`）：
   - 网页铺满 1920×1080：页面按 1371 宽排版，`html { zoom: 1.4 }` 放大（Playwright 录屏不会缩放，只会补灰边）。注入层里的 fixed 元素坐标要除以 `ZOOM`。
   - 去掉深色舞台框和顶栏；字幕改成底部一个半透明框（章节标签 + 韩语字幕，不再有中文字幕）。
   - 第一帧与片头最后一帧一致；脚本把真正开始的秒数写进 `out/walkthrough_start.txt`，`compose-final.py` 按它裁剪（改前备份 `compose-final.backup-20261027.py`）。
   - 运行需要 `PLAYWRIGHT_BROWSERS_PATH=/Users/wangyanan/.agy-argon-home/Library/Caches/ms-playwright`（录像用的 ffmpeg 只装在那里）。
3. **照片**：`98 개인열람실(캐럴실)` → `assets/carrel.jpg`（学校官方博客 cjnupr 2025-03-27 卡片新闻，3 楼新位置 Carrel/4）；`104 중앙도서관 3층 열람실` → `assets/room3f.jpg`（同组官方新闻）。열람실 2025-03 已从 1 楼搬到 3 楼。
4. **交付包**：01/02/03 已更新（3:02.7 / 3:02.7 / 0:30）；旧版在 `发表演示视频_交付包/_旧版_20261027/`。`out/promo.mp4` 现为新片头，旧片头为 `out/promo_old.mp4`。

## 六、2026-10-28 片头再修（Claude）

- 镜头 5（0:21–0:26）：去掉留学生·中文模式截图，换成「데이터 원칙」页（250 → 178、원문 그대로），保留 TRACEABILITY 小牌子。中文模式只在正片 PART 4 里配着韩语讲解出现。
- 镜头 6（0:26–0:30）转场改成 CardMaker 的做法：标题卡的底和小字先淡掉，只剩「定位图标 + KNUT 꿀팁 가이드」飞到左上角，颜色从白变深，像素级落在网页导航栏 logo 上，然后定格接正片第一帧。
- 源码：knut-promo/src/aifl/Main.tsx（备份 Main.backup-20261028.tsx）；旧成片在交付包 _旧版_20261028/。

## 七、2026-10-28 片头重排成一条连续的使用流程（Claude + Flash）

- 0–9s：8 张숨은장소页面卡片落下展开成扇形 →「숨은장소 TOP 8」空位网页淡入 → 卡片逐张飞回空位 → 网页展开到全屏。
- 9–20s：光标点「전체 목록」→ 连续滚到列表 → 「혼밥 가능」(178→18) →「여러 명이 추천한 곳」(→3，핵밥 第一，9,900원 所以不用 ≤8,000원) → 点 핵밥 开抽屉 → 「네이버 지도」传送门展开地图。
- 20–26s：地图上 HAND-CHECKED 小牌子长成「데이터 원칙」卡片；26–30s logo 转场不变。
- 素材：knut-promo/public/assemble/（截图和坐标 rects.json 由 agyy/Gemini 3.8 Flash 截取，列表组返工一次，Claude 核对）。代码：Main.tsx 的 Journey / JourneyRun，旧 Shot1–5 已删，备份 Main.backup-20261028.tsx。

## 八、2026-10-28 正片修正与结尾动画（Claude + Flash）

- 154 号「종합강의관 휴게라운지」是填写人（R248, 2544412）记错楼：改为「중앙도서관 휴게 라운지」，备注写明更正，删掉错图（w5_exterior.jpg）和「건물 외관」标记；178 / 250 不变。
- 第 2 段配音剪掉「실내 사진이 없는 종합강의관 … 표시했고,」（剪切点由 Flash 听写核对），seg2 31.20s → 24.93s；原文件备份 out/tts/seg2.backup-20261028.wav。
- 数据里两处日文假名（ラウン지）改为中文；韩文模式下详情不再显示中文名（app.js）。
- 录屏：5 处「整页淡白再跳」改为 0.7s 缓动滚动；0:47 光标点「도착」后显示真实步行路线（정문→핵밥 도보 6분 399m，Flash 截图）；PART 2 后半段改为点「맛집 TOP 8」第 1 张打开부리또인；每个卡点打印余量，全部提前到位。
- 结尾：录屏剪到最后一句后 0.7s，接 3.6s 收尾动画（AiflOutro：页面退后变暗、logo 升到中央、감사합니다），成片 3:03 → 2:56。
