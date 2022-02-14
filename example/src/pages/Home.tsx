import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { UseIonHeaderCollapse, useIonHeaderCollapse } from 'ionic-react-header-collapse';

const Home: React.FC = () => {
  const { ref } = useIonHeaderCollapse({} as UseIonHeaderCollapse);
  return (
    <IonPage>
      <IonHeader ref={ref}>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* <ExploreContainer /> */}
        <IonList>
          {[...Array(50).keys()].map((key) => (
            <IonItem
              
              key={key}
            >
              {/* <IonThumbnail slot="start" className="chapter-thumbnail">
                <img src={chapter.photo_url} alt={chapter.title} />
              </IonThumbnail> */}
              <IonLabel className="chapter-label ion-text-wrap">
                <h2>
                  <span>{key + 1}. test</span>
                </h2>
                <h3>{key}</h3>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>

      </IonContent>
    </IonPage>
  );
};

export default Home;
