// ==UserScript==
// @name         BestCraft 繁中版計算完成提示音
// @namespace    http://tampermonkey.net
// @version      1.6
// @description  利用 AudioContext 逼逼叫，免外接音檔、免語音，解決不發聲與按鈕消失問題
// @author       jousora
// @match        https://isla-liu.github.io/ffxiv-best-craft-zhtw/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    let hasPlayed = false;

    function playBeepSound() {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const now = audioCtx.currentTime;

            // 叮～
            const osc1 = audioCtx.createOscillator();
            const gain1 = audioCtx.createGain();
            osc1.type = 'sine';
            osc1.frequency.value = 587.33; // D5
            gain1.gain.setValueAtTime(0.2, now);
            gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
            osc1.connect(gain1);
            gain1.connect(audioCtx.destination);
            osc1.start(now);
            osc1.stop(now + 0.4);

            // 咚～（延遲 0.15 秒疊加上去）
            setTimeout(() => {
                const osc2 = audioCtx.createOscillator();
                const gain2 = audioCtx.createGain();
                osc2.type = 'sine';
                osc2.frequency.value = 880.00; // A5
                gain2.gain.setValueAtTime(0.2, audioCtx.currentTime);
                gain2.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.5);
                osc2.connect(gain2);
                gain2.connect(audioCtx.destination);
                osc2.start();
                osc2.stop(audioCtx.currentTime + 0.5);
            }, 150);

        } catch (e) {
            console.error(e);
        }
    }


    // 初始化按鈕函數
	//測試按鈕
    /*
    function initNotificationButton() {
        if (document.getElementById('bc-voice-auth-btn')) return; // 防止重複建立

        const btn = document.createElement('button');
        btn.id = 'bc-voice-auth-btn';
        btn.innerText = "🔊 點擊此處：啟用通知音效";
        btn.style.cssText = "position: fixed; top: 10px; left: 10px; z-index: 99999; padding: 10px; background: #28a745; color: white; border: none; border-radius: 5px; cursor: pointer; font-weight: bold; box-shadow: 0 4px 6px rgba(0,0,0,0.1);";

        btn.addEventListener('click', () => {
            playBeepSound(); // 點擊時立刻試叫，取得瀏覽器發聲授權
            btn.innerText = "✅ 音效已解鎖！可以開始求解";
            btn.style.background = "#007bff";
            setTimeout(() => btn.remove(), 3000); // 3 秒後自動隱藏
        });

        document.body.appendChild(btn);
    }

    // 防呆：確保網頁的 body 載入完成後才放按鈕
    if (document.body) {
        initNotificationButton();
    } else {
        window.addEventListener('DOMContentLoaded', initNotificationButton);
    }
    */

    // --- 狀態偵測循環 ---
    setInterval(() => {
        const pageText = document.body.innerText.replace(/\s+/g, '');

        // 1. 偵測是否在「求解中」
        const isSolving = pageText.includes("求解中") || pageText.includes("Solving") || /Raphael.*求解中/.test(pageText);
        if (isSolving) {
            hasPlayed = false;
        }

        // 2. 偵測是否「求解完成」
        const textMatched = /Raphael.*求解完成/.test(pageText) || pageText.includes("求解完成");
        const btnMatched = pageText.includes("導出宏") || pageText.includes("複製宏");

        if ((textMatched || btnMatched) && !hasPlayed) {
            playBeepSound(); // 觸發晶片發出嗶嗶聲
            hasPlayed = true;
            console.log("【提示】Raphael 計算完成，已發出晶片嗶嗶聲！");
        }
    }, 500);
})();
