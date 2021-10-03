<template>
    <div class="user-info-form-control">
        <b-row>
            <b-col lg="6" md="12" class="py-2">
                <Input placeholder="NAME" isEmpty='true'/>
            </b-col>
            <b-col lg="6" md="12" class="py-2">
                <Input placeholder="E-MAIL"/>
            </b-col>
            <b-col lg="6" md="12" class="py-2">
                <Input placeholder="COUNTRY"/>
            </b-col>
            <b-col lg="6" md="12" class="py-2">
                <Input placeholder="JOB"/>
            </b-col>
        </b-row> 
        <b-row>
            <b-col lg="7" sm="12" class="py-2">
                <Checkbox text="I agree to the Terms & Conditions and Privacy Policy of Insplosion" isChecked='true' />
            </b-col>
            <b-col lg="5" sm="12" class="text-sm-center text-lg-right">
                <Button02 text="FREE DOWNLOAD" theme="red" hover="red-white" />
            </b-col>
        </b-row>
    </div>
</template>

<script>
import Input from '@/components/basic/Input';
import Button02 from '@/components/basic/Button02';
import Checkbox from '@/components/basic/Checkbox';
export default {
    name: 'UserInfoForm',
    components: {
        Input,
        Button02,
        Checkbox
    }
}
</script>