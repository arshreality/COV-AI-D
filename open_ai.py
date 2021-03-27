import openai
openai.api_key = "sk-2jRMD9G0ojitxcVNfUCtBaE6OVcrju2WQ4Xxs43w"
a = openai.Classification.create(
    search_model="ada",
    model="curie",
    examples=[
        ["Hello! I am a 23-year-old male I am 1.65 m tall and weigh 65 kg. Recently my sleeping pattern has been all over the place. I am also losing my appetite and have not been having proper bowel movements as of late. I  drink alcohol weekly and also use tobacco products every day. I have recently developed Headaches, difficulty in breathing, cough, cold, mild chills, Chest pain. I have also lost my sense of smell and taste.", "Positive"], 
        ["Hello! I am a 23-year-old female. I am 1.6 m tall and weigh 62 kg. I  drink alcohol monthly and even use tobacco products occasionally. I have started to produce this random sound when I breathe. I also have diarrhea, fever. My voice is getting rough and I also have constant muscle ache.", "Positive"], 
        ["Hello! I am a 26-year-old male. I am 1.75 m tall and weigh 82 kg. Recently my sleeping pattern has been all over the place. I am also losing my appetite and have not been having proper bowel movements as of late. I  do not drink alcohol and don't use tobacco products. I don't have any symptoms of covid.", "Negative"], 
        ["Hello! I am a 21-year-old male. I am 1.8 m tall and weigh 80 kg. I have recently developed Headaches, difficulty in breathing, cough, cold, mild chills, Chest pain. I have also lost my sense of smell and taste.", "Positive"], 
        ["Hello! I am a 24-year-old male. I am 1.6 m tall and weigh 58 kg. I  drink alcohol monthly and even use tobacco products occasionally. I have started to produce this random sound when I breathe. I also have diarrhea, fever. My voice is getting rough and I also have constant muscle ache.", "Positive"], 
        ["Hello! I am a 22-year-old male. I am 1.65 m tall and weigh 70 kg. Recently my sleeping pattern has been all over the place. I am also losing my appetite and have not been having proper bowel movements as of late. I  drink alcohol weekly and also use tobacco products every day. I have recently developed Headaches, difficulty in breathing, cough, cold, mild chills, Chest pain. I have also lost my sense of smell and taste.", "Positive"], 
        ["Hello! I am a 26-year-old male. I am 1.75 m tall and weigh 82 kg. Recently my sleeping pattern has been all over the place. I am also losing my appetite and have not been having proper bowel movements as of late. I  do not drink alcohol and don't use tobacco products. I don't have any symptoms of covid or hematuria (random bleeding).", "Negative"]
    ],
    query="Hello! I am a 23-year-old female. I am 1.6 m tall and weigh 62 kg. Recently my sleeping pattern has been all over the place. I am also losing my appetite and have not been having proper bowel movements as of late. I  drink alcohol monthly and even use tobacco products occasionally. I have started to produce this random sound when I breathe. I also have diarrhea, fever. My voice is getting rough and I also have constant muscle ache.", 
    labels=["Positive", "Negative"],
)

print(type(a))
print(a.label)