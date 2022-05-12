import React, { useEffect } from 'react'
import { JitsiMeeting } from '@jitsi/react-sdk';

const Meeting = () => {
  useEffect(() => {
     return () => {
        
        if(!window.location.hash) {
            window.location = window.location + '#loaded';
            window.location.reload();
        }
    }
  }, [])
  
    return (
        <>
        {/* {document. location. reload() } */}
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