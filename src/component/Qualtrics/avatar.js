import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AvatarGenerator = () => {
  const [avatarURL, setAvatarURL] = useState('');
  const [upload, setUpload] = useState(null);
  const [photoId, setPhotoId] = useState('');

  const options = {
    method: 'POST',
    url: 'https://upload.heygen.com/v1/talking_photo',
    headers: {
      'accept': 'application/json',
      'content-type': 'application/json',
      'X-API-KEY': 'OGEyN2UzZjU3NDhlNGJjMzgwYjI0ODVkMzBhYzRmMjgtMTY5ODY0OTYxMw=='
    },
    data: 'https://www.vidnoz.com/talking-head.html'
  };
  const uploadPhoto = async () => {
    try {
      console.log("14");
      axios.request(options)
      .then(function (response) {
        console.log("24",response.data);
    })
  .catch(function (error) {
    console.error(error);
  });
     
    } catch (error) {
      console.error('Error uploading photo:', error);
    }
  };
  
  const generateAvatar = async () => {
    if (!photoId) {
      console.error('No photo ID available. Upload a photo first.');
      return;
    }

    try {
      const response = await axios.post(
        'https://api.heygen.com/v2/video/generate',
        {
          video_inputs: [
            {
              character: {
                type: 'talking_photo',
                talking_photo_id: "03b5b51234fd4474a0ef8f7817d27532", 
              },
              voice: {
                type: 'text',
                input_text: 'With HeyGen, it\'s very easy to create talking photo videos.',
                voice_id: 'd7bbcdd6964c47bdaae26decade4a933',
              },
              background: {
                type: 'color',
                value: '#FAFAFA',
              },
            },
          ],
          test: true,
          aspect_ratio: '16:9',
        },
        {
          headers: {
            'X-Api-Key': 'OGEyN2UzZjU3NDhlNGJjMzgwYjI0ODVkMzBhYzRmMjgtMTY5ODY0OTYxMw==',
            'Content-Type': 'application/json',
          },
        }
      );

      if (response.data.video_url) {
        setAvatarURL(response.data.video_url);
      } else {
        console.error('Video URL not received.');
      }
    } catch (error) {
      console.error('Error generating avatar:', error);
    }
  };

  const handleFileChange = (event) => {
    setUpload(event.target.files[0]);
  };

  const responseApi = async () => {
    console.log("88");
    try {
      console.log("90");
      const response = await axios.post('https://yul1.qualtrics.com/API/v3/survey-definitions', 
      {
        "SurveyName": "ayush survey",
        "Language": "en",
        "ProjectCategory": "CORE"
      }, {
        headers: {  
          'Authorization': 'Bearer YSrG6bXJzRQOD81mOZoa5Ug7S32yWK3YQGVIyVFp'
        }
      });
      console.log("Response:", response);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    responseApi();
  },[]);

  return (
    <div>
      {/* <input type="file" accept="image/*" onChange={handleFileChange} />
      <button onClick={uploadPhoto} style={{ marginTop: '20px', color: 'black' }}>
        Upload Photo
      </button>
      <button onClick={generateAvatar} style={{ marginTop: '20px', color: 'black' }}>
        Generate Avatar
      </button>
      {avatarURL && <video src={avatarURL} controls autoPlay />} */}
      <iframe src="https://qualtricsxmjydvctwt6.qualtrics.com/jfe/form/SV_9pEevqh1NQhZq2a" width= '100%' height='670px' title='survey form'></iframe>
    </div>
  );
};

export default AvatarGenerator;
