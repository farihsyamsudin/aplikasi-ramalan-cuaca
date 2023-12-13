import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';
import { useState } from 'react';
import { API_KEY, API_URL } from '../lib/constant';
import axios from 'axios';
import HasilRamalan from '../components/HasilRamalan';

const Tab1: React.FC = () => {
  const [isiSearchBar, setIsiSearchBar] = useState('')
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false) 
  const [err_message, setErr_message] = useState('')

  const getDataFromAPI = () => {

    setLoading(true)
    setErr_message('')

    axios.get(`${API_URL}/forecast.json?key=${API_KEY}&q=${isiSearchBar}`)
    .then((res) => {
      setData(res.data)
      console.log(data)
      setLoading(false)
    })
    .catch((err) => {
      setLoading(false)
      console.log(err.response.data)
      setErr_message(err.response.data.error.message)
      console.log(err_message)
    })
  }

  const submittedSearchBar = (e) => {
    e.preventDefault()
    getDataFromAPI()
    setIsiSearchBar('')
  }

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
          {!data ? (
            <div className='container-search-bar'>
              {loading ? 'Loading' : ''}
              {err_message !== '' ? err_message : ''}
              <h2 className='heading-judul-aplikasi'>Masukkan Nama Negara / Kota</h2>
              <form onSubmit={submittedSearchBar} >
                <input onChange={(e) => setIsiSearchBar(e.target.value)} value={isiSearchBar} className='search-bar' placeholder='Try Search "Indonesia" / "Bandung"' type="text" />
                {isiSearchBar !== '' && (
                  <button type='submit' className='search-button'>
                    Search
                  </button>
                )}
              </form>
            </div>
          )
          : <HasilRamalan data={data} />
          }
          
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
