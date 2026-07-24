# BestCraft (Isla-Liu ZHTW) Auto-Notification Script
### BestCraft 繁中版計算完成叮咚提示音腳本

[繁體中文說明](#-繁體中文說明) | [English Description](#-english-description)

---

## 🇹🇼 繁體中文說明

這是一個專為 `ffxiv-best-craft-zhtw`（Isla-Liu 繁體中文在地化分支版）生產模擬器設計的 Tampermonkey（油猴）自動化腳本。

由於高難度配方的 AI 求解通常需要耗費數分鐘，本腳本能在計算完成的瞬間，自動透過瀏覽器核心發出溫和清脆的**「叮～咚～」和弦自動語音通知**。更新後的版本已達成**全自動發聲**，無需再手動點擊任何解鎖按鈕。讓您可以安心將網頁縮小、切回 FF14 遊戲或觀賞影片，不再需要頻繁切回網頁查看進度。

### 🚀 安裝與使用指南

#### 第一步：安裝瀏覽器擴充功能（油猴 / Tampermonkey）
您必須先為您的瀏覽器安裝腳本管理器：
1. 使用 **Microsoft Edge** 或 **Google Chrome** 瀏覽器。
2. 前往擴充功能商店下載並安裝 **Tampermonkey**：
   * [Chrome 線上應用程式商店](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

#### 第二步：建立並安裝本腳本
1. 點擊瀏覽器右上角的 **Tampermonkey 圖示**，選擇 **「建立新腳本」** (Create a new script)。
2. 將本儲存庫中 `script.js` 的完整程式碼複製，並貼上覆蓋掉編輯器內的全部預設文字。
3. 點擊編輯器左上角的 **「檔案 (File)」 ＞ 「儲存 (Save)」**。

#### 第三步：開始使用與重要注意事項
1. 前往 [BestCraft 繁中版模擬器網頁](https://isla-liu.github.io/ffxiv-best-craft-zhtw/#/welcome)。
2. 本腳本已優化為**全自動背景偵測**，當您在網頁進行選配方、調整屬性或點擊「開始求解」時，瀏覽器即會自動核准發聲權限。
3. 按下求解後，您可以放心將網頁切到背景、縮小，或是切回 FF14 遊戲中。
4. 計算完成時，系統會自動在背景響起優雅的「叮～咚～」聲，提示您回網頁複製巨集！

### 💖 鳴謝 / Acknowledgments
非常感謝 BestCraft 生產模擬器網頁以及 **Raphael 演算法** 的提供。Raphael 演算法所帶來「保證 100% 成功率」的解法對我而言是一個極度實用且強大的功能。但也因為 100% 保證解法需要消耗較長的 AI 計算時間，且原網頁在計算完成時，並未提供視窗外的提示機制，為了優化這最後一哩路的掛機體驗，才有了本專案的誕生。

---

## 🇺🇸 English Description

This is a Tampermonkey userscript specifically designed for the `ffxiv-best-craft-zhtw` (Isla-Liu Traditional Chinese Localization Fork) crafting simulator.

Since high-difficulty recipe AI solving often takes several minutes, this script automatically generates a gentle and pleasant **"Ding-Dong" chime notification** using the browser's built-in AudioContext the exact moment the calculation finishes. The updated version achieves **fully automatic playback** without requiring any manual unlocking clicks. This allows you to minimize the window, switch back to FFXIV, or watch videos without constantly checking the simulator's progress.

### 🚀 Installation & Usage Guide

#### Step 1: Install Browser Extension (Tampermonkey)
You need a script manager installed in your browser first:
1. Use **Microsoft Edge** or **Google Chrome**.
2. Download and install **Tampermonkey** from the respective extension store:
   * [Chrome Web Store](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo)

#### Step 2: Create and Install the Script
1. Click the **Tampermonkey icon** in the top right corner of your browser and select **"Create a new script"**.
2. Copy the entire source code from `script.js` in this repository and paste it into the editor, replacing all default text.
3. Click **"File" ＞ "Save"** in the top left corner of the editor.

#### Step 3: How to Use & Important Notice
1. Navigate to the [BestCraft ZHTW Simulator](https://isla-liu.github.io/ffxiv-best-craft-zhtw/#/welcome).
2. This script features **fully automated background detection**. When you interact with the page (selecting recipes, tweaking stats, or clicking "Solve"), the browser will automatically grant audio permissions.
3. After clicking solve, you can safely put the browser in the background, minimize it, or switch back to FFXIV.
4. Once the calculation is complete, a gentle "Ding-Dong" chime will automatically play in the background, reminding you to copy your macros!

### 💖 Acknowledgments
Special thanks to the BestCraft crafting simulator and the creators of the **Raphael algorithm**. The "100% guaranteed success rate" solver provided by the Raphael algorithm is an incredibly powerful and useful feature for me. However, achieving a 100% guaranteed solution requires a significant amount of AI computation time, and the original web interface lacked out-of-window notifications upon completion. To optimize this idling experience, this repository was born.

---

### 📄 License
This project is licensed under the MIT License. Feel free to modify and share!
