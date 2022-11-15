import './App.css'
import { useState } from 'react'
import useMessages from './useMessages'

function App() {
    const [forum, setForum] = useState('nasa')
    const {
        data: messages,
        loading: messagesLoading,
        error: messagesError,
    } = useMessages(forum)

    return (
        <div className='App'>
            <button onClick={() => setForum('nasa')}>NASA</button>
            <button onClick={() => setForum('notNasa')}>NOT NASA</button>
            {messagesError ? (
                <div className='error'>
                    Something went wrong:
                    <div className='error-contents'>{messagesError.messages}
                    </div>
                </div>
                

            ) : messagesLoading ? (
                <div className='loading'>Loading...</div>
            ) : messages && messages.length ? (
                <dl>
                    {messages.ap((m) => (
                        <>
                        <dt>{m.author}</dt>
                        <dt>{m.text}</dt>
                        </>
                    ))}
                </dl>
            ) : (
                'No messages'
            )
        
        }
            
        </div>
    )

    
}

export default App
