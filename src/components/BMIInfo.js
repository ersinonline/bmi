import React from 'react';
import { Card } from '../styles/AppStyles';

const BMIInfo = () => {
  return (
    <Card>
      <h2>Vücut Kitle Endeksi (BMI) Nedir?</h2>
      <p>
        Vücut Kitle Endeksi (BMI), bir kişinin boy ve kilosuna göre vücut yağ oranını tahmin etmek için kullanılan bir ölçüttür.
      </p>
      <h3>BMI Değerleri ve Anlamları:</h3>
      <ul>
        18.5'ten düşük: Zayıf<br></br>
        18.5 - 24.9 arası: Normal<br></br>
        25 - 29.9 arası: Fazla Kilolu<br></br>
        30 ve üzeri: Obez
      </ul>
      <p>
        BMI değeri, sağlıklı bir kiloda olup olmadığınızı değerlendirmek için kullanılır, ancak tek başına kesin bir ölçüt değildir.
        Kas kütlesi, yağ dağılımı ve diğer faktörler de önemlidir.
      </p>
    </Card>
  );
};

export default BMIInfo; 