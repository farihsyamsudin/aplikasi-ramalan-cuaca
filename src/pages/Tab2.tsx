import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Aplikasi Ramalan Cuaca</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Aplikasi Ramalan Cuaca</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div className='ion-padding'>
          Aplikasi ini menggunakan API dari api.weatherapi.com dan dibuat oleh Farih Syamsudin. Aplikasi ini dapat digunakan untuk melihat prakiraan cuaca dari suatu kota/negara di berbagai benua. Coba untuk ketikkan nama negara / kota dalam kolom pencarian di tab "Ramalan Cuaca". Selamat mencoba !
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
