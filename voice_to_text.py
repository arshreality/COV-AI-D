import speech_recognition as sr
import pyttsx3 
  
# Initialize the recognizer 
r = sr.Recognizer() 
  
# Loop infinitely for user to
# speak
  
while(1):    
      
    try:
          
        # use the microphone as source for input.
        with sr.Microphone() as source2:
              

            r.adjust_for_ambient_noise(source2, duration=0.2)
              
            #listens for the user's input 
            audio2 = r.listen(source2)
              
            # Using google to recognize audio
            MyText = r.recognize_google(audio2)
            MyText = MyText.lower()
              
    except sr.RequestError as e:
        print("Could not request results; {0}".format(e))
          
    except sr.UnknownValueError:
        print("unknown error occured")