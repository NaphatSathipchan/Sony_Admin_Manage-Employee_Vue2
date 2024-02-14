<template>
    <div class="card flex justify-content-center" style="width: 362px; height: 45px; 
           left: 134px; top: 400px; position: absolute;">
        <Dropdown v-model="selectedName" :options="names" 
        filter optionLabel="name" placeholder="Select a name"
            class="w-full md:w-10rem">
        </Dropdown>
    </div>
</template>

<script>
import { ref } from "vue";
import Dropdown from 'primevue/dropdown';

export default {
    name: 'Emp_name',
    components: {
        Dropdown
    },
    setup() {
        const selectedName = ref();
        const names = ref([
            { 'id': 1, 'name': 'Naphat Sathipchan' },
            { 'id': 2, 'name': 'Sittisak Rodpraya' },
            { 'id': 3, 'name': 'Hemaraj Rodpraya' },
            { 'id': 4, 'name': 'Somchai Rodpraya' },
            { 'id': 5, 'name': 'Ekkachai Thongprakorn' },
            { 'id': 6, 'name': 'Voravudh Saelim' },
            { 'id': 7, 'name': 'Kanya Trongpanich' },
            { 'id': 8, 'name': 'Somchai Chalermsuk' },
            { 'id': 9, 'name': 'Ukrit Thitimakorn' },
            { 'id': 10, 'name': 'Fahsai Charoenpura' },
            { 'id': 11, 'name': 'Chalerm Rodpraya' },
            { 'id': 12, 'name': 'Chalerm Songgram' },
            { 'id': 13, 'name': 'Araya Thongprakorn' },
            { 'id': 14, 'name': 'Boon-Nam Kongsomboon' },
            { 'id': 15, 'name': 'Jirayu Kongsomboon' },
            { 'id': 16, 'name': 'Ekkachai Thongkanthom' },
            { 'id': 17, 'name': 'Narong Sathipchan' },
            { 'id': 18, 'name': 'Yuwadee Kulap' },
            { 'id': 19, 'name': 'Fahsai Nakorn' },
            { 'id': 20, 'name': 'Jirayu Nakorn' },
            { 'id': 21, 'name': 'Phichit Trongpanich' },
            { 'id': 22, 'name': 'Lalisa Rodpraya' },
            { 'id': 23, 'name': 'Gan Kulap' },
            { 'id': 24, 'name': 'Zara Chitmanee' },
            { 'id': 25, 'name': 'Ratree Panitchpakdi' },
            { 'id': 26, 'name': 'Yuwadee Vongvorachoti' },
            { 'id': 27, 'name': 'Jirayu Chalermsuk' },
            { 'id': 28, 'name': 'Lalisa Panyarachun' },
            { 'id': 29, 'name': 'Lalisa Kongsomboon' },
            { 'id': 30, 'name': 'Mongkut Intarawat' },
            { 'id': 31, 'name': 'Ukrit Pakdi' },
            { 'id': 32, 'name': 'Dara Sukhum' },
            { 'id': 33, 'name': 'Ratree Prasert' },
            { 'id': 34, 'name': 'Somchai Pakdi' },
            { 'id': 35, 'name': 'Ratree Pakdi' },
            { 'id': 36, 'name': 'Somchai Chitmanee' },
            { 'id': 37, 'name': 'Ratree Chitmanee' },
            { 'id': 38, 'name': 'Boon-Nam Chitmanee' },
            { 'id': 39, 'name': 'Voravudh Chitmanee' },
            { 'id': 40, 'name': 'Araya Thongprakorn' },
            { 'id': 41, 'name': 'Lalisa Kasem' },
            { 'id': 42, 'name': 'Hemaraj Vongvorachoti' },
            { 'id': 43, 'name': 'Lalisa Chitmanee' },
            { 'id': 44, 'name': 'Ong-art Nakorn' },
            { 'id': 45, 'name': 'Ong-art Panitchpakdi' },
            { 'id': 46, 'name': 'Kanya Songgram' },
            { 'id': 47, 'name': 'Ong-art Vongvorachoti' },
            { 'id': 48, 'name': 'Mongkut Trongpanich' },
            { 'id': 49, 'name': 'Mongkut Kulap' },
            { 'id': 50, 'name': 'Voravudh Songgram' },
            { 'id': 51, 'name': 'Mongkut Trongpanich' },
            { 'id': 52, 'name': 'Narong Sukhum' },
            { 'id': 53, 'name': 'Ong-art Prasert' },
            { 'id': 54, 'name': 'Thaksin Sukhum' },
            { 'id': 55, 'name': 'Jirayu Wongsawat' },
            { 'id': 56, 'name': 'Xenphong Sathipchan' },
            { 'id': 57, 'name': 'Somchai Songgram' },
            { 'id': 58, 'name': 'Hemaraj Pakdi' },
            { 'id': 59, 'name': 'Voravudh Prasert' },
            { 'id': 60, 'name': 'Dara Charoenpura' },
            { 'id': 61, 'name': 'Somchai Kongsomboon' },
            { 'id': 62, 'name': 'Ong-art Nakorn' },
            { 'id': 63, 'name': 'Ukrit Rodpraya' },
            { 'id': 64, 'name': 'Phichit Pakdi' },
            { 'id': 65, 'name': 'Boon-Nam Wongsawat' },
            { 'id': 66, 'name': 'Ekkachai Wongsawat' },
            { 'id': 67, 'name': 'Yuwadee Chitmanee' },
            { 'id': 68, 'name': 'Phichit Panyarachun' },
            { 'id': 69, 'name': 'Imsouchivy Rodpraya' },
            { 'id': 70, 'name': 'Zara Sathipchan' },
            { 'id': 71, 'name': 'Imsouchivy Chantara' },
            { 'id': 72, 'name': 'Ratree Trongpanich' },
            { 'id': 73, 'name': 'Dara Wongsawat' },
            { 'id': 74, 'name': 'Gan Chitmanee' },
            { 'id': 75, 'name': 'Mongkut Wongsawat' },
            { 'id': 76, 'name': 'Xenphong Trongpanich' },
            { 'id': 77, 'name': 'Ekkachai Wongsawat' },
            { 'id': 78, 'name': 'Phichit Thongkanthom' },
            { 'id': 79, 'name': 'Wannakorn Thitimakorn' },
            { 'id': 80, 'name': 'Jirayu Panitchpakdi' },
            { 'id': 81, 'name': 'Phichit Chitmanee' },
            { 'id': 82, 'name': 'Kanya Sathipchan' },
            { 'id': 83, 'name': 'Ekkachai Pakdi' },
            { 'id': 84, 'name': 'Yuwadee Songgram' },
            { 'id': 85, 'name': 'Boon-Nam Chantara' },
            { 'id': 86, 'name': 'Dara Chantara' },
            { 'id': 87, 'name': 'Yuwadee Thongprakorn' },
            { 'id': 88, 'name': 'Somchai Kasem' },
            { 'id': 89, 'name': 'Ratree Rodpraya' },
            { 'id': 90, 'name': 'Chalerm Chitmanee' },
            { 'id': 91, 'name': 'Zara Intarawat' },
            { 'id': 92, 'name': 'Fahsai Kongsomboon' },
            { 'id': 93, 'name': 'Ekkachai Intarawat' },
            { 'id': 94, 'name': 'Thaksin Thongprakorn' },
            { 'id': 95, 'name': 'Zara Wongsawat' },
            { 'id': 96, 'name': 'Gan Charoenpura' },
            { 'id': 97, 'name': 'Imsouchivy Kasem' },
            { 'id': 98, 'name': 'Lalisa Thitimakorn' },
            { 'id': 99, 'name': 'Kanya Loetchutinun' },
            { 'id': 100, 'name': 'Chalerm Panyarachun' }
        ]);

        return {
            selectedName,
            names
        };
    }
}

</script>