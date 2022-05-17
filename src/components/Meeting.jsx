import React, { useEffect, useState } from 'react'
import { JitsiMeeting } from '@jitsi/react-sdk';
import LoadingBar from 'react-top-loading-bar'
const Meeting = () => {
    const [progress, setProgress] = useState(0)

  useEffect(() => {
     return () => {
       
        if(!window.location.hash) {
            setProgress(30)
            window.location = window.location + "#loaded";
            setProgress(60)
            window.location.reload();
            setProgress(90)
        }
        setProgress(100)
    }
  }, [])
  
    return (
        <>
        {/* {document. location. reload() } */}
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
            <JitsiMeeting
                configOverwrite={{
                    startWithAudioMuted: true,
                    hiddenPremeetingButtons: ['microphone']
                }}
                roomName={'YOUR_CUSTOM_ROOM_NAME'}
                getIFrameRef={node => node.style.height = '600px'}
            />
        </>
    )
}

export default Meeting