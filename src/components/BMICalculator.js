import React, { useState, useEffect } from 'react';
import { Button, Input, Card } from '../styles/AppStyles';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [diet, setDiet] = useState('');

  useEffect(() => {
    const savedHeight = localStorage.getItem('height');
    const savedWeight = localStorage.getItem('weight');
    if (savedHeight) setHeight(savedHeight);
    if (savedWeight) setWeight(savedWeight);
  }, []);

  const calculateBMI = () => {
    if (height && weight) {
      const heightInMeters = height / 100;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
      setBmi(bmiValue);
      
      localStorage.setItem('height', height);
      localStorage.setItem('weight', weight);

      // Diyet önerisi belirleme
      if (bmiValue < 18.5) {
        setDiet('Kilo almanız önerilir. Protein ve karbonhidrat ağırlıklı beslenme programı uygulayabilirsiniz.');
      } else if (bmiValue >= 18.5 && bmiValue < 25) {
        setDiet('Normal kilodasınız. Sağlıklı beslenme alışkanlıklarınızı sürdürmeye devam edin.');
      } else if (bmiValue >= 25 && bmiValue < 30) {
        setDiet('Fazla kilolusunuz. Düşük kalorili ve dengeli beslenme programı uygulayabilirsiniz.');
      } else {
        setDiet('Obezite riski taşıyorsunuz. Mutlaka bir diyetisyen ile görüşmeniz önerilir.');
      }
    }
  };

  return (
    <Card>
      <h2>Vücut Kitle Endeksi Hesaplama</h2>
      <div>
        <label>Boy (cm): </label>
        <Input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          placeholder="Boyunuzu girin"
        />
      </div>
      <div>
        <label>Kilo (kg): </label>
        <Input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          placeholder="Kilonuzu girin"
        />
      </div>
      <Button onClick={calculateBMI}>Hesapla</Button>
      
      {bmi && (
        <div>
          <h3>Sonuçlar</h3>
          <p>Vücut Kitle Endeksiniz: {bmi}</p>
          <p>Diyet Önerisi: {diet}</p>
        </div>
      )}
    </Card>
  );
};

export default BMICalculator; 