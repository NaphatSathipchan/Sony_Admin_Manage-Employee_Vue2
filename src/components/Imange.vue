<template>
        <div class="button-group">
            <!-- Add Images -->
            <b-button class="Add_imange" variant="dark" 
            @click="onSelectFile">+ Add Images</b-button>
            
            <input type="file" ref="fileInput" 
            @change="handleFiles" multiple accept="image/*" 
            style="display: none" />

            <!-- Delete All Images -->
            <b-button class="delete-all-button" variant="dark" 
            @click="deleteAllHandler">Delete All Images</b-button>
        </div>

        <!-- Images Container -->
        <div class="images-container">
            <div v-for="(imgSrc, index) in selectedImages" 
            :key="index" class="image-wrapper">
                <b-button className='delete-button' 
                @click="deleteHandler(imgSrc)"><img
                        src="https://cdn-icons-png.flaticon.com/512/5028/5028066.png" 
                        alt="Delete icon" 
                        height="30"
                        width="30" />
                    </b-button>
                <img :src="imgSrc" height="80" width="80" alt="Uploaded Image" />
            </div>
        </div>
    
</template>

<script>
import { ref } from "vue";

export default {
    name: "Imange",

    setup() {
        const imageSrc = ref("./assets/image.png");
        const selectedImages = ref([]);

        const fileInput = ref(null);

        function onSelectFile() {
            fileInput.value.click();
        }

        function handleFiles(event) {
            const files = event.target.files;
            if (!files.length) return;

            const newImageUrls = Array.from(files).map((file) =>
                URL.createObjectURL(file)
            );
            selectedImages.value.push(...newImageUrls);
        }

        function deleteHandler(image) {
            selectedImages.value = selectedImages.value.filter((img) => img !== image);
            URL.revokeObjectURL(image);
        }

        function deleteAllHandler() {
            selectedImages.value.forEach((img) => URL.revokeObjectURL(img));
            selectedImages.value = [];
        }
           


        return {
            imageSrc,
            selectedImages,
            fileInput,
            onSelectFile,
            handleFiles,
            deleteHandler,
            deleteAllHandler
            
        }
    }
}


</script>



<style scoped>
/* Add your styles here */
body {
    overflow: hidden;
    /* Hide scrollbars */
}

section {
    padding: 2rem 0;
}

label {
    padding: 8px 16px;
    /* Adjust padding as needed */
    background-color: #000000;
    /* Adjust background color as needed */
    color: white;

    cursor: pointer;
    border: 1px dotted black;
    border-radius: 20px;
    width: 9rem;
    height: 3rem;
    font-size: medium;
    margin-left: 55rem;
}

label span {
    font-weight: lighter;
    font-size: small;
    padding-top: 0.5rem;
}

input {
    display: none;
}

img {
    padding: 0;
    margin: 0;
}

.images {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.image {
    margin: 1rem 0.5rem;
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
}

.image button {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
    border: none;
    color: white;
    background-color: lightcoral;
}

.image button:hover {
    background-color: red;
}

.image p {
    padding: 0 0.5rem;
    margin: 0;
}



label:hover,
.upload-btn:hover {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
        rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
}

.error {
    text-align: center;
}

.error span {
    color: red;
}

.delete-button {
    border: none;
    cursor: pointer;
    position: absolute;
    top: 0px;
    /* Adjust as necessary to move it vertically */
    right: -5px;
    /* Adjust as necessary to move it horizontally */
    background: none;
    display: none;

}

.image-wrapper:hover .delete-button {
    display: block;
    /* Show on hover */
}

.Add_imange {
    height: 45px;
    width: 174px;
    left: 800px;
    top: 580px;
    position: absolute;

}

.delete-all-button {
    height: 45px;
    width: 174px;
    left: 1000px;
    top: 580px;
    position: absolute;

}




.images-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    background-color: #878686;
    border: 11px solid;
    border-color: #000000;
    border-radius: 14px;
    box-shadow: 0px 4px 4px #00000040;
    height: 636px;
    left: 600px;
    position: absolute;
    top: 153px;
    width: 777px;
    /* or grid, depending on your preference */
    /* Adjust the space between images as needed */
    padding: 10px;
    /* Just for visual reference, can be removed */
    margin-top: 5px;
    overflow-y: auto;
    /* Adds scroll to the container if content overflows */
    max-height: 400px;
    /* Adjust the space between images as needed */

}

.image-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 14.4px;
    position: relative;
}



/* Add a media query if you want to handle different screen sizes */
@media (min-width: 768px) {
    .images-container {
        justify-content: flex-start;
    }
}

.button-group {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-right: 20rem;
    /* Adjust the space between buttons as needed */
}
</style>
