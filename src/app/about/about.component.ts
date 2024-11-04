import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  aboutInfo: string = `Merhabalar ben Alper Yüzgeç. Necmettin Erbakan Üniversitesi Yönetim Bilişim Sistemleri bölümünden bu yıl itibariyle mezun oldum. Üniversite eğitimi boyunca kazandığım teorik bilgi ve pratik becerileri, çeşitli eğitimler ve kurslar aracılığıyla aldığım sertifikalarla pekiştirdim ve bu donanımı iş hayatına taşıyarak kariyerime sağlam bir başlangıç yapmak istiyorum.

Eğitimim süresince, mobil programcılık alanında bir yıllık staj deneyimi edindim ve bu süreçte iş dünyası ve çalışma hayatında tecrübe kazandım. Şu an veri alanında aktif olarak aldığım eğitimlerle ve bootcampler ile kendimi geliştiriyorum. Bu alandaki yetkinliklerimi artırarak, sektördeki yerimi sağlamlaştırmayı hedefliyorum. Yeni mezun bir birey olarak, iş bulmanın zorluklarının farkındayım; ancak kendimi geliştirmek, sektörde tecrübe kazanmak ve bu alanda katkıda bulunmak için büyük bir istek duyuyorum.`;
  pdfSrc = 'assets/AlperYuzgecCV.pdf';
}
