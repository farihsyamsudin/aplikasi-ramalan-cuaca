import { IonButton } from "@ionic/react"
import { getCurrentDate } from "../lib/constant"
import { Link } from "react-router-dom"

const HasilRamalan = ({ data }) => {

    console.log(data)

    return (
      <div style={{'padding' : '0 15px 0 15px'}}>
        <h2 style={{'textAlign' : 'center', 'padding' : '0 15px 0 15px', 'fontSize' : '20px', 'marginBottom' : '50px'}}>Hasil Ramalan Cuaca di {data.location.country} <br /> ({getCurrentDate("-")})</h2>
        <div style={{'paddingBottom' : '30px'}}>
          <h3>Detail Informasi (Lokasi)</h3>
          <p>Negara : {data.location.country}</p>
          <p>Latitude (Garis lintang) : {data.location.lat}</p>
          <p>Longitude (Garis bujur) : {data.location.lon}</p>
          <p>Kota : {data.location.name} \ {data.location.region} \ {data.location.tz_id}</p>
        </div>
        <div style={{'paddingBottom' : '30px'}}>
          <h3>Informasi Matahari & Bulan</h3>
          <p>Sunset : {data.forecast.forecastday[0].astro.sunset}</p>
          <p>Sunrise : {data.forecast.forecastday[0].astro.sunrise}</p>
          <p>Moonset : {data.forecast.forecastday[0].astro.moonset}</p>
          <p>Moonrise : {data.forecast.forecastday[0].astro.moonrise}</p>
          <p>Fase Bulan : {data.forecast.forecastday[0].astro.moon_phase}</p>
        </div>
        <div style={{'paddingBottom' : '30px'}}>
          <h3>Rangkuman Hari Ini (24 Jam)</h3>
          <p>Rata-rata kelembaban : {data.forecast.forecastday[0].day.avghumidity}%</p>
          <p>Rata-rata suhu : {data.forecast.forecastday[0].day.avgtemp_c} C</p>
          <p>Jarak pandang rata-rata : {data.forecast.forecastday[0].avgvis_km} Km</p>
          <p>Kondisi : {data.forecast.forecastday[0].day.condition.text}</p>
          <p>Temperatur Minimal Hari ini : {data.forecast.forecastday[0].day.mintemp_c}C</p>
          <p>Temperatur Maksimal Hari ini : {data.forecast.forecastday[0].day.maxtemp_c}C</p>
          <p>Kecepatan Angin : {data.forecast.forecastday[0].day.maxwind_kph}Km/Jam</p>
        </div>

        <div style={{'paddingBottom' : '30px'}}>
          <h3>Per Jam</h3>
          <div style={{'padding' : '10px 15px 10px 15px', 'margin' : '10px 15px 10px 15px', 'border' : 'solid black 2px' , 'display' : 'flex', 'overflowX' : 'auto', 'flexDirection' : 'row', 'gap' : '25px' }}>
            {data.forecast.forecastday[0].hour.map((e) => (
                <div key={e.time_epoch} style={{'backgroundColor' : '#3880ff', 'width' : '300px', 'flexShrink' : '0', 'color' : 'white', 'borderRadius' : '10px', 'padding' : '5px 10px 5px 10px'}}>
                    <p>Waktu : {e.time.slice(-5)}</p>
                    <p>Kondisi : {e.condition.text}</p>
                    <p>Kelembaban : {e.humidity}%</p>
                    <p>Index panas : {e.heatindex_c}C</p>
                    <p>Temperature : {e.temp_c}C</p>
                    <p>Kecepatan Angin : {e.wind_kph}Km/Jam</p>
                </div>
            ))}
          </div>


          <Link to="/tab1"> <IonButton style={{'width' : '100%', 'display' : 'block', 'marginTop' : '20px'}}>Cari Wilayah Lain</IonButton> </Link>

        </div>


      </div>
    )
}

export default HasilRamalan
