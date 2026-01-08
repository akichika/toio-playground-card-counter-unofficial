const SERVICE_UUID = '10b20100-5b3b-4571-9508-cf3efcd7bbae';
const ID_SENSOR_CHAR_UUID = '10b20101-5b3b-4571-9508-cf3efcd7bbae';
const MOTOR_CHAR_UUID = '10b20102-5b3b-4571-9508-cf3efcd7bbae';
const LED_CHAR_UUID = '10b20103-5b3b-4571-9508-cf3efcd7bbae';
const SOUND_CHAR_UUID = '10b20104-5b3b-4571-9508-cf3efcd7bbae';
const IMG_BASE = "img/";

const i18n = {
    ja: {
        title: "トイオ・プレイグラウンド検品ツール for PC(非公式) v1.0.0", connect: "toio キューブ接続", add: "追加接続",
        tireStart: "キューブ駆動", tireStop: "キューブ停止", fbOn: "音あり", fbOff: "音なし",
        save: "保存", ok: "全数OK ✅", ng: "{n}枚 不足", excess: "{n}枚 超過", statusWait: "接続待ち", 
        msgSaved: "保存完了", return1: "1枚戻す", clear: "クリア", next: "保存＆次へ", 
        grid: "画像表示", list: "画像非表示", help: "使い方", sidebarTitle: "履歴",
        clearAllLogs: "履歴をすべて削除", memoPlaceholder: "検品メモを入力...",
        confirmClear: "カウントをすべてリセットしますか？",
        confirmDeleteAll: "すべての履歴を完全に削除しますか？",
        confirmLoad: "カウントを上書きして読み込みますか？",
        helpBody: "0. Chrome/EdgeなどWebBluetooth対応ブラウザでこのページを開いてください。<br>1. 「toio キューブ接続」を押し接続します（複数台使用対応）。<br>2. カードにキューブが触れると自動カウントします。<br>3. 「キューブ駆動」でカードの上を走りながらカウントすることもできます。<br>4. 任意でコメントを入れ、「次の箱」でカウント履歴の保存し、カウンターをリセットします（箱番号は連番で更新）。",
        advWarn: "アドバンスを選択してください", 
        modeNames: { basic: "ベーシック", advanced: "アドバンス" },
        viewNames: { grid: "画像表示", list: "画像非表示" },
        trademark: `<b>知的財産権表記 / Trademark Notice</b><br>"toio™"は、株式会社ソニー・インタラクティブエンタテインメントの登録商標または商標です。その他の商品名、サービス名、会社名またはロゴマークは、各社の商標、登録商標もしくは商号です。`
    },
    en: {
        title: "[Unofficial] toio PlayGround Card Counter for PC v1.0.0", connect: "Connect toio Cube", add: "Add Cube",
        tireStart: "Drive Cube", tireStop: "Stop Cube", fbOn: "Feedback On", fbOff: "Feedback Off",
        save: "Save", ok: "All OK ✅", ng: "{n} Short", excess: "{n} Excess", statusWait: "Waiting...", 
        msgSaved: "Saved", return1: "Return 1", clear: "Clear", next: "Save & Next", 
        grid: "Show Images", list: "Hide Images", help: "Help", sidebarTitle: "History",
        clearAllLogs: "Delete all history", memoPlaceholder: "Inspection note...",
        confirmClear: "Reset all current counts?",
        confirmDeleteAll: "Clear all history permanently?",
        confirmLoad: "Overwrite current counts and load?",
        helpBody: "0. Please open this page in a Web Bluetooth-compatible browser, such as Chrome or Edge.<br>1. Press 'Connect toio Cube' to connect your cubes (supports multiple connections).<br>2. Touching a cube to a card will automatically increment the count.<br>3. Use 'Drive Cube' to count while the cube drives over the cards.<br>4. Optionally add a comment and press 'Next Box' to save history and reset the counter (box numbers update sequentially).",
        advWarn: "Please select Advanced mode", 
        modeNames: { basic: "Basic", advanced: "Advanced" },
        viewNames: { grid: "Show Images", list: "Hide Images" },
        trademark: `<b>Trademark Notice</b><br><br>"toio™" is a trademark or registered trademark of Sony Interactive Entertainment Inc. All other product names, service names, company names or logos are trademarks, registered trademarks or trade names of their respective owners.`
    }
};

const CARD_CSV = `basic,そうこう,ゆっくり ひだり,3702450,2,card-basic_01.png
basic,そうこう,ゆっくり まっすぐ,3702451,2,card-basic_02.png
basic,そうこう,ゆっくり みぎ,3702452,2,card-basic_03.png
basic,そうこう,はやく ひだり,3702453,2,card-basic_04.png
basic,そうこう,はやく まっすぐ,3702454,2,card-basic_05.png
basic,そうこう,はやく みぎ,3702455,2,card-basic_06.png
basic,そうこう,とてもはやく ひだり,3702456,2,card-basic_07.png
basic,そうこう,とてもはやく まっすぐ,3702457,2,card-basic_08.png
basic,そうこう,とてもはやく みぎ,3702458,2,card-basic_09.png
basic,アクション,ゴール,3702090,2,card-basic_10.png
basic,アクション,おとしあな,3702113,4,card-basic_11.png
basic,アクション,こっちむく,3702093,8,card-basic_12.png
basic,アクション,どこかむく,3702112,2,card-basic_13.png
basic,アクション,ぶつかるまで まつ,3702092,2,card-basic_14.png
basic,アクション,スピン,3702095,2,card-basic_15.png
basic,アクション,ダッシュ,3702099,2,card-basic_16.png
basic,アクション,パニック,3702152,2,card-basic_17.png
basic,おと,ベル,3702091,2,card-basic_18.png
basic,おと,うた(ハッピーバースデー),3702381,1,card-basic_19.png
basic,おと,うた(かえるのがっしょう),3702392,1,card-basic_20.png
basic,おと,せいかい,3702360,1,card-basic_21.png
basic,おと,ふせいかい,3702361,1,card-basic_22.png
advanced,そうこう,ゆっくり ひだり,3702450,2,card-basic_01.png
advanced,そうこう,ゆっくり まっすぐ,3702451,2,card-basic_02.png
advanced,そうこう,ゆっくり みぎ,3702452,2,card-basic_03.png
advanced,そうこう,はやく ひだり,3702453,2,card-basic_04.png
advanced,そうこう,はやく まっすぐ,3702454,2,card-basic_05.png
advanced,そうこう,はやく みぎ,3702455,2,card-basic_06.png
advanced,そうこう,とてもはやく ひだり,3702456,2,card-basic_07.png
advanced,そうこう,とてもはやく まっすぐ,3702457,2,card-basic_08.png
advanced,そうこう,とてもはやく みぎ,3702458,2,card-basic_09.png
advanced,アクション,ゴール,3702090,2,card-basic_10.png
advanced,アクション,おとしあな,3702113,4,card-basic_11.png
advanced,アクション,こっちむく,3702093,8,card-basic_12.png
advanced,アクション,どこかむく,3702112,4,card-basic_13.png
advanced,アクション,ぶつかるまで まつ,3702092,2,card-basic_14.png
advanced,アクション,スピン,3702095,2,card-basic_15.png
advanced,アクション,ダッシュ,3702099,2,card-basic_16.png
advanced,アクション,パニック,3702152,2,card-basic_17.png
advanced,アクションAdv,ゆっくり ひだりかいてん,3702104,1,card-adv_31.png
advanced,アクションAdv,はやく ひだりかいてん,3702105,1,card-adv_32.png
advanced,アクションAdv,とてもはやく ひだりかいてん,3702106,1,card-adv_33.png
advanced,アクションAdv,ゆっくり みぎかいてん,3702101,1,card-adv_34.png
advanced,アクションAdv,はやく みぎかいてん,3702102,1,card-adv_35.png
advanced,アクションAdv,とてもはやく みぎかいてん,3702103,1,card-adv_36.png
advanced,アクションAdv,1秒まつ,3702096,2,card-adv_01.png
advanced,アクションAdv,3秒まつ,3702097,2,card-adv_02.png
advanced,アクションAdv,5秒まつ,3702098,2,card-adv_03.png
advanced,アクションAdv,1歩すすむ,3702107,6,card-adv_04.png
advanced,アクションAdv,2歩すすむ,3702108,6,card-adv_05.png
advanced,アクションAdv,3歩すすむ,3702109,6,card-adv_06.png
advanced,おと,ベル,3702091,2,card-basic_18.png
advanced,おと,うた(ハッピーバースデー),3702381,1,card-basic_19.png
advanced,おと,うた(かえるのがっしょう),3702392,1,card-basic_20.png
advanced,おと,せいかい,3702360,1,card-basic_21.png
advanced,おと,ふせいかい,3702361,1,card-basic_22.png
advanced,スペシャル,わりこみ(1秒),3702190,1,card-adv_09.png
advanced,スペシャル,わりこみ(2秒),3702191,1,card-adv_10.png
advanced,スペシャル,わりこみ(3秒),3702192,1,card-adv_11.png
advanced,スペシャル,わりこみ(ぶつかる),3702200,1,card-adv_12.png
advanced,スペシャル,わりこみ(じしゃく),3702201,1,card-adv_13.png
advanced,スペシャル,きろく A,3702051,1,card-adv_14.png
advanced,スペシャル,きろく B,3702052,1,card-adv_15.png
advanced,スペシャル,きろく C,3702053,1,card-adv_16.png
advanced,スペシャル,きろくていし,3702050,2,card-adv_17.png
advanced,スペシャル,さいせい A,3702071,1,card-adv_18.png
advanced,スペシャル,さいせい B,3702072,1,card-adv_19.png
advanced,スペシャル,さいせい C,3702073,1,card-adv_20.png
advanced,スペシャル,ループさいせい A,3702061,1,card-adv_21.png
advanced,スペシャル,ループさいせい B,3702062,1,card-adv_22.png
advanced,スペシャル,ループさいせい C,3702063,1,card-adv_23.png`;

let cardMaster = [];
let currentCounts = {};
let connectedCubes = [];
let savedLogs = [];
let tiresRunning = false;
let warningTimer = null;

function init() {
    cardMaster = CARD_CSV.trim().split('\n').map(l => {
        const [mode, cat, name, id, exp, img] = l.split(',');
        return { mode, cat, name, id: parseInt(id), exp: parseInt(exp), img };
    });
    if(localStorage.getItem('toio-pg-card-counter-unofficial_logs')) savedLogs = JSON.parse(localStorage.getItem('toio-pg-card-counter-unofficial_logs'));
    updateLanguage();
    renderLogs();
}

function updateLanguage() {
    const lang = document.getElementById('langSelect').value;
    const t = i18n[lang];
    document.getElementById('ui-title').innerText = t.title;
    document.getElementById('connectBtn').innerText = connectedCubes.length > 0 ? t.add : t.connect;
    document.getElementById('tireBtn').innerText = tiresRunning ? t.tireStop : t.tireStart;
    document.getElementById('feedbackSelect').options[0].text = t.fbOn;
    document.getElementById('feedbackSelect').options[1].text = t.fbOff;
    document.getElementById('helpBtn').innerText = t.help;        // 「使い方 / Help」
    document.getElementById('saveLogBtn').innerText = t.save;     // 「保存 / Save」
    document.getElementById('clearBtn').innerText = t.clear;      // 「クリア / Clear」
    document.getElementById('nextBoxBtn').innerText = t.next;     // 「次の箱 / Next Box」
    document.getElementById('ui-help-title').innerText = t.help;
    document.getElementById('ui-help-body').innerHTML = t.helpBody;
    document.getElementById('ui-sidebar-title').innerText = t.sidebarTitle;
    document.getElementById('clearAllLogsBtn').innerText = t.clearAllLogs;
    document.getElementById('logCommentInput').placeholder = t.memoPlaceholder;
    document.getElementById('ui-trademark').innerHTML = t.trademark;
    document.getElementById('boxPrefix').value = document.getElementById('modeSelect').value === 'advanced' ? "TPG-A" : "TPG-B";

    const modeSelect = document.getElementById('modeSelect');
    modeSelect.options[0].text = t.modeNames.basic;
    modeSelect.options[1].text = t.modeNames.advanced;
    const viewSelect = document.getElementById('viewSelect');
    viewSelect.options[0].text = t.viewNames.grid;
    viewSelect.options[1].text = t.viewNames.list;
    renderUI();
}

function renderUI() {
    const area = document.getElementById('displayArea');
    const mode = document.getElementById('modeSelect').value;
    const view = document.getElementById('viewSelect').value;
    const t = i18n[document.getElementById('langSelect').value];
    area.innerHTML = '';
    area.className = (view === 'list' ? 'view-list' : 'view-grid') + ' mode-' + mode;
    const filtered = cardMaster.filter(c => c.mode === mode);
    const cats = [...new Set(filtered.map(c => c.cat))];

    cats.forEach(cat => {
        const container = document.createElement('div');
        container.className = 'category-container';
        const label = document.createElement('div');
        label.className = 'category-label'; label.innerText = cat;
        container.appendChild(label);
        const grid = document.createElement('div');
        grid.className = 'card-grid';
        filtered.filter(c => c.cat === cat).forEach(card => {
            if(currentCounts[card.id] === undefined) currentCounts[card.id] = 0;
            const count = currentCounts[card.id];
            const item = document.createElement('div');
            item.className = 'card-item'; item.setAttribute('data-id', card.id); item.setAttribute('data-exp', card.exp);
            if(view === 'grid') {
                item.innerHTML = `<img src="${IMG_BASE}${card.img}" class="card-img" onerror="this.src='https://placehold.jp/150x100?text=toio'"><div class="card-name">${card.name}<span class="check-mark">✅</span></div><div style="font-size:8px; color:#888;">ID: ${card.id}</div><div style="display:flex; justify-content:space-between; align-items:center; margin-top:3px;"><button onclick="changeCount(${card.id}, -1)" class="btn-mini">${t.return1}</button><div style="text-align:right;"><b class="current-cnt">0</b> / ${card.exp}<br><span class="status-badge"></span></div></div>`;
            } else {
                item.innerHTML = `<div class="card-name">${card.name}<span class="check-mark">✅</span></div><div class="card-controls"><button onclick="changeCount(${card.id}, -1)" class="btn-mini">${t.return1}</button><span style="font-weight:900; width:55px; text-align:center;"><span class="current-cnt">0</span> / ${card.exp}</span><span class="status-badge"></span></div>`;
            }
            grid.appendChild(item);
        });
        container.appendChild(grid);
        area.appendChild(container);
    });
    updateAllCardUIs();
}

function updateSingleCardUI(id) {
    const lang = document.getElementById('langSelect').value;
    const count = currentCounts[id] || 0;
    
    document.querySelectorAll(`.card-item[data-id="${id}"]`).forEach(el => {
        const exp = parseInt(el.getAttribute('data-exp'));
        el.querySelector('.current-cnt').innerText = count;
        
        const badgeArea = el.querySelector('.status-badge');
        if(badgeArea) {
            const diff = exp - count;
            badgeArea.classList.remove('missing-badge', 'excess-badge');
            if(diff > 0) {
                badgeArea.innerText = (lang==='ja'?'不足:':'Short:') + diff;
                badgeArea.classList.add('missing-badge');
            } else if(diff < 0) {
                badgeArea.innerText = (lang==='ja'?'超過:':'Excess:') + Math.abs(diff);
                badgeArea.classList.add('excess-badge');
            } else {
                badgeArea.innerText = '';
            }
        }
        
        el.classList.remove('complete', 'excess');
        if(count === exp) el.classList.add('complete');
        else if(count > exp) el.classList.add('excess');
    });
    checkComplete();
}

function updateAllCardUIs() {
    const allIds = [...new Set(cardMaster.map(c => c.id))];
    allIds.forEach(id => updateSingleCardUI(id));
}

async function sendFeedback(cube, index) {
    if(document.getElementById('feedbackSelect').value === 'off') return;
    const note = 60 + (2 * index);
    const soundCmd = new Uint8Array([0x03, 0x01, 0x01, 10, note, 255]);
    const ledCmd = new Uint8Array([0x04, 10, 0x01, 0x01, 0, 255, 0]);
    try {
        if(cube.charSound) await cube.charSound.writeValue(soundCmd);
        if(cube.charLed) await cube.charLed.writeValue(ledCmd);
    } catch(e) { console.warn("FB fail", e); }
}

function changeCount(id, delta, cube = null) {
    const currentMode = document.getElementById('modeSelect').value;
    // 【修正】現在のモードに合致する定義を優先的に検索
    const scannedCard = cardMaster.find(c => c.id === id && c.mode === currentMode) || cardMaster.find(c => c.id === id);
    
    if (scannedCard) {
        currentCounts[id] = Math.max(0, (currentCounts[id] || 0) + delta);
        document.getElementById('liveCardName').innerText = scannedCard.name;
        document.getElementById('liveId').innerText = id;
        
        // 警告判定：ベーシックモードでアドバンス専用カードを読んだ場合のみ警告を出す
        if (currentMode === 'basic' && scannedCard.mode === 'advanced') {
            showModeWarning(i18n[document.getElementById('langSelect').value].advWarn);
        } else {
            hideModeWarning();
        }

        // 【修正】カードが見つかれば、モードが一致していなくてもフィードバックを実行する
        const target = document.querySelector(`.card-item[data-id="${id}"]`);
        if(target) { 
            target.classList.add('active'); 
            setTimeout(() => target.classList.remove('active'), 200); 
        }
        if(delta > 0 && cube) sendFeedback(cube, connectedCubes.indexOf(cube));
    }
    updateSingleCardUI(id);
}

function showModeWarning(msg) {
    const warnEl = document.getElementById('modeWarning');
    warnEl.innerText = msg; warnEl.style.display = 'block';
    if (warningTimer) clearTimeout(warningTimer);
    warningTimer = setTimeout(hideModeWarning, 3000);
}
function hideModeWarning() { document.getElementById('modeWarning').style.display = 'none'; }

function checkComplete() {
    const mode = document.getElementById('modeSelect').value;
    const cards = cardMaster.filter(c => c.mode === mode);
    const lang = document.getElementById('langSelect').value;
    const t = i18n[lang];
    let missing = 0, excess = 0;
    cards.forEach(c => {
        const diff = c.exp - (currentCounts[c.id] || 0);
        if(diff > 0) missing += diff; else if(diff < 0) excess += Math.abs(diff);
    });

    const bannerMain = document.getElementById('banner-main');
    const bannerSub = document.getElementById('banner-sub');
    const banner = document.getElementById('totalStatusBanner');

    if(connectedCubes.length === 0) { bannerMain.innerText = t.statusWait; bannerSub.innerText = ''; banner.className = ""; }
    else if(missing === 0 && excess === 0) { bannerMain.innerText = t.ok; bannerSub.innerText = ''; banner.className = "status-ok"; }
    else {
        if(missing > 0 && excess > 0) { bannerMain.innerText = t.ng.replace("{n}", missing); bannerSub.innerText = t.excess.replace("{n}", excess); }
        else if(missing > 0) { bannerMain.innerText = t.ng.replace("{n}", missing); bannerSub.innerText = ''; }
        else { bannerMain.innerText = t.excess.replace("{n}", excess); bannerSub.innerText = ''; }
        bannerSub.className = "banner-excess"; banner.className = "status-ng";
    }
}

async function connect() {
    try {
        const device = await navigator.bluetooth.requestDevice({ filters: [{ services: [SERVICE_UUID] }] });
        const server = await device.gatt.connect();
        const service = await server.getPrimaryService(SERVICE_UUID);
        
        const charId = await service.getCharacteristic(ID_SENSOR_CHAR_UUID);
        const charMotor = await service.getCharacteristic(MOTOR_CHAR_UUID);
        const charLed = await service.getCharacteristic(LED_CHAR_UUID);
        const charSound = await service.getCharacteristic(SOUND_CHAR_UUID);
        
        const cubeObj = { device, charId, charMotor, charLed, charSound, lastId: null };
        connectedCubes.push(cubeObj);
        
        await charId.startNotifications();
        charId.addEventListener('characteristicvaluechanged', (e) => {
            const val = e.target.value;
            if(val.getUint8(0) === 2) {
                const id = val.getUint32(1, true);
                if(id !== cubeObj.lastId) { cubeObj.lastId = id; if(cardMaster.some(c => c.id === id)) changeCount(id, 1, cubeObj); }
            } else { cubeObj.lastId = null; }
        });
        document.getElementById('cubeList').innerHTML = connectedCubes.map((c, i) => `<span style="background:#444; border:1px solid #0f0; border-radius:4px; padding:1px 4px; font-size:9px; color:#0f0; margin-right:3px;">#${i+1} ${c.device.name}</span>`).join('');
        updateLanguage();
    } catch(e) { console.error("BLE Conn Fail", e); }
}

function toggleTires() {
    tiresRunning = !tiresRunning;
    const speed = tiresRunning ? 40 : 0;
    const cmd = new Uint8Array([0x01, 0x01, 0x01, speed, 0x02, 0x01, speed]);
    connectedCubes.forEach(cube => {
        if (cube.charMotor) cube.charMotor.writeValue(cmd).catch(e => console.warn(e));
    });
    updateLanguage();
}

function saveLog(showAlert = true) {
    const boxId = document.getElementById('boxPrefix').value + document.getElementById('boxSerial').value;
    const t = i18n[document.getElementById('langSelect').value];
    const log = { id: Date.now(), boxId, summary: document.getElementById('totalStatusBanner').innerText.replace(/\n/g, ' / '), comment: document.getElementById('logCommentInput').value, mode: document.getElementById('modeSelect').value, counts: {...currentCounts}, timestamp: new Date().toLocaleString() };
    savedLogs.unshift(log); localStorage.setItem('toio-pg-card-counter-unofficial_logs', JSON.stringify(savedLogs)); renderLogs();
    document.getElementById('logCommentInput').value = ''; 
    if(showAlert) alert(t.msgSaved);
}

function renderLogs() { document.getElementById('logList').innerHTML = savedLogs.map(l => `<div class="log-item"><b>${l.boxId}</b> (${l.timestamp})<br>${l.summary}${l.comment ? `<div style="background:#fff; padding:4px; border-left:3px solid var(--pg-blue); margin-top:5px; font-style:italic; word-break:break-all; white-space:pre-wrap;">${l.comment}</div>` : ''}<div class="log-actions"><button onclick="loadLog(${l.id})" class="btn-mini btn-primary">Load</button><button onclick="deleteLog(${l.id})" class="btn-mini btn-danger">Del</button></div></div>`).join(''); }
function loadLog(id) { const t = i18n[document.getElementById('langSelect').value]; const log = savedLogs.find(l => l.id === id); if(log && confirm(t.confirmLoad)) { currentCounts = {...log.counts}; document.getElementById('modeSelect').value = log.mode; updateLanguage(); } }
function deleteLog(id) { if(confirm("Delete?")) { savedLogs = savedLogs.filter(l => l.id !== id); localStorage.setItem('toio-pg-card-counter-unofficial_logs', JSON.stringify(savedLogs)); renderLogs(); } }
function clearAllLogs() { const t = i18n[document.getElementById('langSelect').value]; if(confirm(t.confirmDeleteAll)) { savedLogs = []; localStorage.setItem('toio-pg-card-counter-unofficial_logs', JSON.stringify(savedLogs)); renderLogs(); } }

function exportData(type) {
    let content = (type === 'json') ? JSON.stringify(savedLogs, null, 2) : "\ufeffBoxID,Time,Status,Note\n" + savedLogs.map(l => `"${l.boxId}","${l.timestamp}","${l.summary}","${l.comment || ''}"`).join("\n");
    const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([content], {type: 'text/plain'})); a.download = `history.${type}`; a.click();
}

function importData(event) {
    const reader = new FileReader();
    reader.onload = (e) => { try { const data = JSON.parse(e.target.result); if(Array.isArray(data)) { savedLogs = data.concat(savedLogs); localStorage.setItem('toio-pg-card-counter-unofficial_logs', JSON.stringify(savedLogs)); renderLogs(); } } catch(err) { alert("Error"); } };
    reader.readAsText(event.target.files[0]);
}

function toggleSidebar() { document.getElementById('sidebar').classList.toggle('open'); }
function closeModal() { document.getElementById('helpModal').style.display = 'none'; }
document.getElementById('helpBtn').addEventListener('click', () => { document.getElementById('helpModal').style.display = 'block'; });

document.getElementById('connectBtn').addEventListener('click', connect);
document.getElementById('tireBtn').addEventListener('click', toggleTires);
document.getElementById('modeSelect').addEventListener('change', updateLanguage);
document.getElementById('viewSelect').addEventListener('change', renderUI);
document.getElementById('langSelect').addEventListener('change', updateLanguage);
document.getElementById('saveLogBtn').addEventListener('click', () => saveLog(true));

// クリアボタン
document.getElementById('clearBtn').addEventListener('click', () => { 
    const t = i18n[document.getElementById('langSelect').value];
    if(confirm(t.confirmClear)) { 
        currentCounts = {}; 
        updateAllCardUIs(); 
    } 
});

// 次の箱ボタン（ダイアログなしでリセット、連番加算）
document.getElementById('nextBoxBtn').addEventListener('click', () => { 
    saveLog(false); 
    currentCounts = {}; 
    if (document.getElementById('autoInc').checked) {
        const serialInput = document.getElementById('boxSerial');
        serialInput.value = String(parseInt(serialInput.value) + 1).padStart(3, '0');
    }
    updateAllCardUIs(); 
});

init();