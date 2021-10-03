<template>
    <section class="newsletter-section section-padding">
        <div class="container d-flex justify-content-center align-items-center">
            <div class="newsletter-form-wrapper">
                <p class="newsletter-section-title">Subscreva aqui a nossa newsletter para ficar a par das novidades</p>
                <form action="" class="newsletter-form">
                    <div class="newsletter-input-wrapper">
                        <label>
                            <p>Email</p>
                            <FormulateInput type="email" name="email" validation="required|email" />
                        </label>
                    </div>
                    <div class="newsletter-checkbox-wrapper">
                        <label>
                            <FormulateInput type="checkbox" validation="required" />
                            <p>Autorizo a utilização dos dados acima para efeitos de contacto</p>
                        </label>
                    </div>
                    <div class="d-flex justify-content-end align-items-center">
                        <FormulateInput type="submit" name="Subscrever" input-class="newsletter-submit-btn"/>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
export default {
  name:'AppNewsletter'
}
</script>
