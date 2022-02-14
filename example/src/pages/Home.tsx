import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Home.css';
import { UseIonHeaderCollapse, useIonHeaderCollapse } from 'ionic-react-header-collapse';

const Home: React.FC = () => {
  const { ref } = useIonHeaderCollapse({} as UseIonHeaderCollapse);
  return (
    <IonPage>
      <IonHeader ref={ref}>
        <IonToolbar>
          <IonTitle>Ionic header</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonList>
          {[...Array(50).keys()].map((key) => (
            <IonItem
              key={key}
            >
              <IonLabel className="chapter-label ion-text-wrap">
                <h2>
                  <span>{key + 1}. test</span>
                </h2>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Home;
