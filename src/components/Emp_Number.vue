<template>
    <div class="card flex justify-content-start"
    
    style="width: 362px; height: 45px; 
           left: 134px; top: 500px; position: absolute;">
        <Dropdown v-model="selectedNumber" 
        :options="numbers" 
        filter optionLabel="number"
        placeholder="Select a Number"
        class="w-full md:w-10rem">
        </Dropdown>
    </div>
</template>

<script>
import { ref } from "vue";
import Dropdown from 'primevue/dropdown';

export default {
    name: 'Emp_Number',
    components: { Dropdown } ,
    setup() {
        const selectedNumber = ref();
        const numbers = ref([
            { 'id': 1, 'number': '1784916' },
            { 'id': 2, 'number': '5257603' },
            { 'id': 3, 'number': '6986429' },
            { 'id': 4, 'number': '4892223' },
            { 'id': 5, 'number': '1802115' },
            { 'id': 6, 'number': '0771145' },
            { 'id': 7, 'number': '5601495' },
            { 'id': 8, 'number': '5657620' },
            { 'id': 9, 'number': '4228210' },
            { 'id': 10, 'number': '9181277' },
            { 'id': 11, 'number': '1067315' },
            { 'id': 12, 'number': '8046920' },
            { 'id': 13, 'number': '6314413' },
            { 'id': 14, 'number': '5593255' },
            { 'id': 15, 'number': '4119836' },
            { 'id': 16, 'number': '7330066' },
            { 'id': 17, 'number': '2012389' },
            { 'id': 18, 'number': '8288206' },
            { 'id': 19, 'number': '2021048' },
            { 'id': 20, 'number': '1530410' },
            { 'id': 21, 'number': '6108988' },
            { 'id': 22, 'number': '6000913' },
            { 'id': 23, 'number': '2494146' },
            { 'id': 24, 'number': '7316689' },
            { 'id': 25, 'number': '0156888' },
            { 'id': 26, 'number': '4612869' },
            { 'id': 27, 'number': '8526973' },
            { 'id': 28, 'number': '9795859' },
            { 'id': 29, 'number': '9246096' },
            { 'id': 30, 'number': '6313709' },
            { 'id': 31, 'number': '0722035' },
            { 'id': 32, 'number': '3212764' },
            { 'id': 33, 'number': '5706753' },
            { 'id': 34, 'number': '8181394' },
            { 'id': 35, 'number': '5614666' },
            { 'id': 36, 'number': '9314012' },
            { 'id': 37, 'number': '0827660' },
            { 'id': 38, 'number': '3736523' },
            { 'id': 39, 'number': '1358186' },
            { 'id': 40, 'number': '8579594' },
            { 'id': 41, 'number': '4721477' },
            { 'id': 42, 'number': '3738303' },
            { 'id': 43, 'number': '2716751' },
            { 'id': 44, 'number': '7722248' },
            { 'id': 45, 'number': '2748123' },
            { 'id': 46, 'number': '2733864' },
            { 'id': 47, 'number': '6430112' },
            { 'id': 48, 'number': '5858242' },
            { 'id': 49, 'number': '9682727' },
            { 'id': 50, 'number': '1956888' },
            { 'id': 51, 'number': '0161598' },
            { 'id': 52, 'number': '0401704' },
            { 'id': 53, 'number': '5122368' },
            { 'id': 54, 'number': '0228088' },
            { 'id': 55, 'number': '7966441' },
            { 'id': 56, 'number': '8909710' },
            { 'id': 57, 'number': '4065318' },
            { 'id': 58, 'number': '0756966' },
            { 'id': 59, 'number': '3182160' },
            { 'id': 60, 'number': '7507997' },
            { 'id': 61, 'number': '1444845' },
            { 'id': 62, 'number': '7176134' },
            { 'id': 63, 'number': '7401936' },
            { 'id': 64, 'number': '8250143' },
            { 'id': 65, 'number': '3034925' },
            { 'id': 66, 'number': '9115438' },
            { 'id': 67, 'number': '9983949' },
            { 'id': 68, 'number': '9342786' },
            { 'id': 69, 'number': '6226390' },
            { 'id': 70, 'number': '2861916' },
            { 'id': 71, 'number': '8062559' },
            { 'id': 72, 'number': '7576287' },
            { 'id': 73, 'number': '9011366' },
            { 'id': 74, 'number': '9939592' },
            { 'id': 75, 'number': '7571515' },
            { 'id': 76, 'number': '8811389' },
            { 'id': 77, 'number': '2405427' },
            { 'id': 78, 'number': '1492750' },
            { 'id': 79, 'number': '3542527' },
            { 'id': 80, 'number': '1176975' },
            { 'id': 81, 'number': '9736171' },
            { 'id': 82, 'number': '5501450' },
            { 'id': 83, 'number': '6608813' },
            { 'id': 84, 'number': '1016061' },
            { 'id': 85, 'number': '2512193' },
            { 'id': 86, 'number': '3725921' },
            { 'id': 87, 'number': '5213045' },
            { 'id': 88, 'number': '8916798' },
            { 'id': 89, 'number': '8242494' },
            { 'id': 90, 'number': '5301755' },
            { 'id': 91, 'number': '8774869' },
            { 'id': 92, 'number': '9461508' },
            { 'id': 93, 'number': '7000600' },
            { 'id': 94, 'number': '6270896' },
            { 'id': 95, 'number': '4622018' },
            { 'id': 96, 'number': '0285444' },
            { 'id': 97, 'number': '5895339' },
            { 'id': 98, 'number': '4461824' },
            { 'id': 99, 'number': '9362558' },
            { 'id': 100, 'number': '7580906' }
        ]);

        return {
            selectedNumber,
            numbers
        }
    
        
    }
}

</script>