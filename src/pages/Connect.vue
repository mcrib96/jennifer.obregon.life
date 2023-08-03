<template>
    <div class="connect ma-10 pa-10 text-center">
        <h2>Let's Connect!</h2><br>
        <br>
        <v-row class="d-flex flex-row justify-center align-center">
            <v-col>
                <v-btn class="mr-5"
                    icon="mdi-linkedin"
                    title="View my profile on Linked In"
                    href="https://www.linkedin.com/in/jennifer-obregon-62a54a146/" 
                    target="new"/>
                <v-btn class="mr-5"
                    icon="mdi-stamper"
                    title="I am a Notary Public"
                    />
                <v-btn class="mr-5"
                    icon="mdi-facebook"
                    title="View my profile on Facebook"
                    href="https://www.facebook.com/jennifer.obregon.3954" 
                    target="new"/>
                <v-btn 
                    icon="mdi-file-download-outline"
                    title="View my resume"
                    href="/assets/resume.pdf"
                    target="new"/>
            </v-col>
        </v-row>
    </div>
</template>
<style scoped>
 .connect {
    width: 80vw;
    
 }
</style>