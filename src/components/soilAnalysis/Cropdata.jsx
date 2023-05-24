import React,{useState,useEffect} from 'react';
import { useTranslation } from 'react-i18next';
import cropDataEn from './data/crop-data-en.json'
import cropDataHi from './data/crop-data-hi.json'
import cropDataMr from './data/crop-data-mr.json'
import cropDataPn from './data/crop-data-pn.json'
import cropDataGj from './data/crop-data-gj.json'
import cropDataTe from './data/crop-data-te.json'

function Cropdata(props) {

  const { crpdata, name } = props;
 
  const { t, i18n } = useTranslation();

  const [cropData, setCropData] = useState(cropDataEn);


  useEffect(() => {
    const currentLanguage = i18n.language;
    console.log('Current language:', currentLanguage);

    if (currentLanguage === 'en') {
      setCropData(cropDataEn);
    } else if (currentLanguage === 'hi') {
      setCropData(cropDataHi);
    } else if (currentLanguage === 'pn') {
      setCropData(cropDataPn);
    }else if (currentLanguage === 'mr') {
      setCropData(cropDataMr);
    }else if (currentLanguage === 'gj') {
      setCropData(cropDataGj);
    }else if (currentLanguage === 'te') {
      setCropData(cropDataTe);
    }
  }, [i18n.language]);

  console.log(cropData)


  return (
  
    <div className="border border-success rounded p-3" style={{ boxShadow: "0 0 5px #00ff00", margin: "10px 20px" }}>
      <div className="container">
        <h2 className="text-center mb-4">
        {t("crop-data.c1")} <b>{cropData.cropData[name].name}</b>  {t("crop-data.c2")}
        </h2>
        <h5 className="text-center">{t("crop-data.about")}</h5>
        <p className="text-center">{cropData.cropData[name].definition}</p>

        <br />
        <h5 className="text-center">{t("crop-data.advantages")}</h5>
        <p>{cropData.cropData[name].advantages}</p>
        <br />

        <h5 className="text-center">{t("crop-data.disadvantages")}</h5>
        <p>{cropData.cropData[name].disadvantages}</p>
        <br />

        <h5 className="text-center">{t("crop-data.method")}</h5>
        <p>{cropData.cropData[name]["method to grow"]}</p>
        <br />

        <h5 className="text-center">{t("crop-data.how")}</h5>
        <p>{cropData.cropData[name]["how to grow"]}</p>
        <br />

        <h5 className="text-center">{t("crop-data.cost")}</h5>
        <p>{cropData.cropData[name]["cost of growth"]}</p>
        <br />

        <h5 className="text-center">{t("crop-data.diff")}</h5>
        <p>{cropData.cropData[name].difficulty}</p>
        <br />

        <h5 className="text-center">{t("crop-data.other")}</h5>
        <p>{cropData.cropData[name]["other details"]}</p>
        <br />

        <div className="d-flex justify-content-center">
  <img
    src={cropData.cropData[name].img}
    alt="crop"
    style={{
      width: '30%',

      objectFit: 'cover',
      borderRadius: '10%',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
    }}
  />
</div>
      </div>
    </div>
  );
  
}

export default Cropdata;
