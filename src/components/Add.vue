<template>
    <div>
        <!-- EMP Picture -->
        <img class="EMP"
            src="https://media.discordapp.net/attachments/898169277436264450/1206773841473441792/image.png?ex=65dd3ab8&is=65cac5b8&hm=c1887033cd35c8308acdf64209f50508d970a70b9b0f97e822f9facc2f6bf9af&=&format=webp&quality=lossless&width=530&height=497" />

        <!-- Submit Button-->
        <div class="Add">
            <Button label="Submit" severity="contrast"  @click="showDialog = true" />
            <Dialog :visible="showDialog" @hide="showDialog = false">
                <template #header>
                    <h4>Success!</h4>
                </template>
                <p>Your upload was successful. Please press the "OK" button to continue.</p>
                <template #footer>
                    <Button label="OK" class="p-button-text" @click="refreshPage" />
                </template>
            </Dialog>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';

export default {
    name: 'Add',
    components: {
        Button,
        Dialog
    },
    setup() {
        const showDialog = ref(false);

        const refreshPage = () => {
            location.reload(); // Reloads the current page
        };

        return {
            showDialog,
            refreshPage
        };
    }
}
</script>

<style scoped>
.Add {
    height: 45px;
    width: 174px;
    left: 220px;
    top: 580px;
    position: absolute;
}
</style>

<style scoped>
.EMP {
    width: 212px;
    height: 199px;
    left: 200px;
    top: 150px;
    position: absolute;
}
</style>
