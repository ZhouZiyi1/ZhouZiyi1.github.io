---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>

Hi, I'm Ziyi Zhou, currently a Ph.D. candidate in Computer Science and Technology at Shanghai Jiao Tong University (SJTU, 上海交通大学).

I come from Shenyang in the Northeast China (a.k.a DongBei). The DongBei is a great place, and welcome to visit the DongBei!!!

I'm a noob in the field of Mobile Security. Currently, I focus on finding vulnerabilities of applications and operating systems on the Android and iOS platforms, especially those that can be elevated into papers, because without sufficient papers, I won't be able to obtain my degree🤣🚑.

I warmly welcome any opportunities for discussion and collaboration, so please don't hesitate to get in touch with me via email at jou.dzyi@sjtu.edu.cn. I really look forward to learning from you. orz


# 🔥 News
- *2023.08*:  😍😍 One paper accepted by ESORICS′23.
- *2022.03*:  😍😍 One paper accepted by DSN′22.


# 📝 Publications 

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ESORICS 2023</div><img src='images/ESORICS23.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**On the (In)Security of Manufacturer-provided Remote Attestation Frameworks in Android**

**<u>Ziyi Zhou</u>**, Xuangan Xiao, Tianxiao Hou, Yiku Hu, Dawu Gu

- In this paper, we analyzed the security of Manufacturer-provided Android Remote Attestation (MARA) frameworks. 

- Thanks to Professor Douglas Leith (@Trinity College Dublin) for his patient and detailed responses to our emails. He addressed our confusion regarding his previous research works and generously shared his experimental details with us.
  
- Thanks to Professor Lei Xue (@Sun Yat-sen University) for his extensive
expertise and patient assistance in resolving the technical difficulties we encountered during the experiments.

</div> 
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">DSN 2022</div><img src='images/DSN22.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
**SIMulation: Demystifying (Insecure) Cellular Network based One-Tap Authentication Services**

**<u>Ziyi Zhou</u>**, Xing Han, Zeyuan Chen, Yuhong Nan, Juanru Li, Dawu Gu

- In this paper, we found high severity vulnerabilities in One-Tap Authentication (OTAuth), a recently emerged cellular network based authentication scheme on Android and iOS platforms.

- Thanks to Chao Wang (@UESTC) for his valuable technical assistance in this work!
  
- Thanks to Yiwei Zhang (@SJTU), Hehao Li (@SJTU), Wenya Wang (@SJTU), Yakang Li (@SJTU), Xuangan Xiao (@SJTU), Yizhuo Wang (@SJTU) for providing SIM cards and assisting in recording relevant videos!
</div> 
</div>

- **\[ESORICS 2023\]** **On the (In)Security of Manufacturer-provided Remote Attestation Frameworks in Android**

  **<u>Ziyi Zhou</u>**, Xuangan Xiao, Tianxiao Hou, Yiku Hu, Dawu Gu. *The 28th European Symposium on Research in Computer Security*, Hague, South Holland, Netherlands, Acceptance rate: ?/478 $\approx$ 18.5% (Data sourced from the Welcome Statement given by PC Co-Chairs)

  [[Link]](https://link.springer.com/chapter/10.1007/978-3-031-51482-1_13)  [[PDF]](https://zhouziyi1.github.io/papers/ESORICS23-MARA.pdf)  [[Slides]](https://zhouziyi1.github.io/papers/ESORICS23-MARA-Slides.pdf)  [[Page]](https://github.com/ZhouZiyi1/MARA)

- **\[DSN 2022\]** **SIMulation: Demystifying (Insecure) Cellular Network based One-Tap Authentication Services**

  **<u>Ziyi Zhou</u>**, Xing Han, Zeyuan Chen, Yuhong Nan, Juanru Li, Dawu Gu. *The 52nd Annual IEEE/IFIP International Conference on Dependable Systems and Networks*, Baltimore, Maryland, USA, Acceptance rate: 49/262 $\approx$ 18.70%

  [[Link]](https://ieeexplore.ieee.org/document/9833804)  [[PDF]](https://zhouziyi1.github.io/papers/DSN22-SIMulation.pdf)  [[Slides]](https://zhouziyi1.github.io/papers/DSN22-SIMulation-Slides.pdf)  [[Page]](https://simulation.code-analysis.org/)  [[Video]](https://www.youtube.com/watch?v=7GmJyURfKxo)

  

# 🎖 Awards
- *[2022.11]* "First-class Cybersecurity" Scholarship, Shanghai Jiao Tong University. (5 Ph.D. winners in the college) (￥10,000 $\approx$ $ 1,369) 
- *[2020]* Zhou Enlai Scholarship (highest student honor in Nankai University) Nomination Award, Nankai University. (20 undergraduate nominees in the school) 
- *[2019.10]* Cybersecurity Scholarship, China Internet Development Foundation.  (97  undergraduate winners nationwide) (￥30,000 $\approx$ $ 4,109)
<!-- - *[2018.11]* China National Scholarship, Ministry of Education of the People's Republic of China. (￥8,000 $\approx$ $ 1,096) -->


# 📖 Educations
- *2020.09 - now*, Ph.D, Major in Computer Science and Technology, @Shanghai Jiao Tong University, supervised by Prof. [Dawu Gu](https://www.cs.sjtu.edu.cn/en/PeopleDetail.aspx?id=169).
- *2016.09 - 2020.06*, Bachelor of Laws, Major in Law, @Nankai University.
- *2016.09 - 2020.06*, Bachelor of Engineering, Major in Information Security, @Nankai University.

# 🐞 Discovered Bugs
\*Only list the first-discoverer/contributor ones.
- *2025.03*: CNVD-2025-04878 (MideaMeiju), CNVD-2025-04891 (51Job), CNVD-2025-04900 (AiShanDong), CNVD-2025-05348 (Tencent MicroVision), CNVD-2025-05349 (Boohee Health), CNVD-2025-05350 (LianJia), CNVD-2025-05356 (IKEA), CNVD-2025-05360 (SuningEMall)
- *2025.02*: CNVD-2025-03380 (Haokan Video), CNVD-2025-03848 (PolyBuzz), CNVD-2025-03741 (Qidian Reader), CNVD-2025-03898 (Shihuo), CNVD-2025-03808 (Sogou Input), CNVD-2025-03177 (Anyihua), CNVD-2025-03178 (Beike Holdings), CNVD-2025-03415 (WPS Office), CNVD-2025-03403 (QQ Mail), CVE-2025-25323, CVE-2025-25324, CVE-2025-25325, CVE-2025-25326, CVE-2025-25329, CVE-2025-25330, CVE-2025-25331, CVE-2025-25333, CVE-2025-25334
- *2025.01*: CNVD-2025-00188 (UC Browser), CNVD-2025-00472 (Tencent Map), CNVD-2025-00766 (ShunFengExpress), CNVD-2025-00800 (CCB Life), CNVD-2025-01141 (Wink), CNVD-2025-01230 (KugouMusic), CNVD-2025-01291(KuGou Concept), CNVD-2025-01980 (UU Game Booster), CNVD-2025-01925 (Baidu Input Method), CVE-2024-56947, CVE-2024-56948, CVE-2024-56949, CVE-2024-56950, CVE-2024-56951, CVE-2024-56952, CVE-2024-56953, CVE-2024-56954, CVE-2024-56955, CVE-2024-56957, CVE-2024-56959, CVE-2024-56960, CVE-2024-56962, CVE-2024-56963, CVE-2024-56964, CVE-2024-56965, CVE-2024-56966, CVE-2024-56967, CVE-2024-56968, CVE-2024-56969, CVE-2024-56971, CVE-2024-56972
- *2024.12*: CVE-2024-46033, CVE-2024-46036, CVE-2024-50718, CVE-2024-53395, CVE-2024-53396, CVE-2024-53398, CVE-2024-53399, CVE-2024-55205
- *2024.11*: CNVD-2024-49839 (UC Browser Lite), CNVD-2024-49840 (QQMusic), CVE-2024-40867 (Apple)
- *2024.10*: CVE-2024-48660, CVE-2024-48661 
- *2024.08*: CVE-2024-42920, CVE-2024-42921, CVE-2024-44602 
- *2024.07*: CVE-2024-40344, CVE-2024-41288 
- *2024.06*: CNVD-2024-34303 (MangoTV), CVE-2024-37809
- *2023.07*: CNVD-2023-57655 (Huawei)
- *2022.05*: CNVD-2022-38288 (7 Android Apps)
- *2022.03*: CNVD-2022-18405 (Amap a.k.a Gaode Map)
- *2022.01*:  CNVD-2022-04497 (China Unicom), CNVD-2022-04499 (China Mobile), CNVD-2022-05690 (China Telecom)


# 👀 Interesting links

Some interesting links:

[1](https://tr0py.github.io/) 
[2](https://shaoyu-li.github.io/)
[3](https://kydahe.github.io/)
[4](https://gange666.github.io/)
[5](https://chaowang.dev/)
[6](https://anderson-xia.github.io/)
