import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';

const Tab3: React.FC = () => {
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
        <ExploreContainer name="Aplikasi Ramalan Cuaca page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
