# COV-AI-D

## Inspiration
As we all know, Covid-19 Virus was the biggest news of 2020, and as such looking for a problem to solve was not that hard. 
One of the main headlines and problems, related to covid was the amount of burden it put on the current health system. Be it the large population that needed regular testing, or the people who had actually contracted the strain and needed help.

As such we wanted to work on reducing this stress by automating the testing procedure with the power of AI.

We believe that with an appropriate amount of data, deep learning algorithms could automatically analyze computed tomography (CT) of the chest and the clinical history, prioritize radiology worklists, and reduce the time for the diagnosis of COVID-19.
Importantly, early diagnosis of COVID-19 is of critical clinical importance since the rate of morbidity is very high and the surge in the number of cases has been constantly increasing, and earlier treatment improves outcomes as well as alleviating the burden on the healthcare system.

## What it does
Our Project has 3 stages that it operates in.

First and foremost is the data collection. The patient and the doctor can decide on the way to collect the required data. They can either use the very detailed written form, 
![Image of Written Form](https://github.com/arshreality/COV-AI-D/blob/main/images/data-form.png)

or the patient can talk about their habits and symptoms and our speech recognition algorithm will take care of the rest.
![Image of Audio Form](https://github.com/arshreality/COV-AI-D/blob/main/images/audio_form.png)

The app then uses  _**OpenAI**_ to compare the data against many recorded backgrounds and symptoms to give a prediction of the Covid test Result.
 
In case of a high probability of a positive result, the hospital technician can issue a CT scan of the patient's chest. Which can be fed into our convolutional neural network, to automatically decide whether the patient has covid or not. 
![Sample CT scan](https://github.com/arshreality/COV-AI-D/blob/main/images/CTscan.png)


Eliminating the need for a specialized doctor like a radiologist in most cases.

Patients and Technicians can obtain the results at any point in the process through a PDF.

![Image of Sample PDF](https://github.com/arshreality/COV-AI-D/blob/main/images/sample-Email.png)

Technologies Used:
- SQLite
- Flask
- HTML
- JavaScript
- CSS
- Keras
- OpenAI
