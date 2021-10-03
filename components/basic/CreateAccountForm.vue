<template>
    <div class="create-account-form-control">
        <b-row>
            <b-col lg="6" class="my-2">
                <Input placeholder="NAME" isEmpty="true" />
            </b-col>
            <b-col lg="6" class="my-2">
                <Input placeholder="E-MAIL" />
            </b-col>
            <b-col lg="6" class="my-2">
                <Input placeholder="PASSWORD" />
            </b-col>
            <b-col lg="6" class="my-2">
                <Input placeholder="CONFIRM PORD" />
            </b-col>
        </b-row>
        <div class="create-account-form-row checkbox-button">
            <Checkbox text="I agree to the Terms & Conditions and Privacy Policy of Insplosion" />
            <Button02 text="CREATE ACCOUNT" theme="red" hover="red-white" />
        </div>
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