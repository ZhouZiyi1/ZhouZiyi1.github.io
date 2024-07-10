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

Hi, I'm Ziyi Zhou, currently a Ph.D. candidate in Computer Science and Technology at Shanghai Jiao Tong University (SJTU, 上海交通大学). Thus, if you come to Shanghai, feel free to contact me!

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
- *2024.07: 🐞 One CNNVD: CNNVD-2024-41880420
  - MangoTV
- *2024.06*: 🐞 One CVE: CVE-2024-37809
  - Tencent
- *2024.05*: 🐞 Four CVEs: CVE-2024-33771, CVE-2024-33772, CVE-2024-33773, CVE-2024-33774
  - D-Link
- *2023.07*: 🐞 One vulnerability verified by CNCERT: CNVD-2023-57655
  - Huawei
- *2022.05*: 🐞 One vulnerability verified by CNCERT: CNVD-2022-38288
  - 7 Android Apps
- *2022.03*: 🐞 One vulnerability verified by CNCERT: CNVD-2022-18405
  - Amap (Gaode Map)
- *2022.01*:  🐞 Three vulnerabilities verified by CNCERT: CNVD-2022-04497, CNVD-2022-04499, CNVD-2022-05690
  - China Unicom, China Mobile, China Telecom



# 👀 Interesting people

I am fortunate to have encountered many interesting friends!

[Ziyi Zhao (赵子懿)](https://tr0py.github.io/)

[Shaoyu Li (李少煜)](https://shaoyu-li.github.io/)

[Yiwei Zhang (张一苇)](https://kydahe.github.io/)

[Xuangan Xiao (肖轩淦)](https://gange666.github.io/)

[Chao Wang (王超)](https://chaowang.dev/)

[Yifan Xia (夏亦凡)](https://anderson-xia.github.io/)