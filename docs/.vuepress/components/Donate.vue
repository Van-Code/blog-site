<template>
  <div class="donation">
    <h2 class="large--text">Make a donation.</h2>
    <p>
      Every contribution goes to the continued research, education and community
      outreach efforts of Quantum Reform LLc. Thank you for supporting the
      cultivation of integrated holistic wellness.
    </p>
    <form
      action="https://www.paypal.com/cgi-bin/webscr"
      method="post"
      target="_top"
    >
      <input type="hidden" name="cmd" value="_s-xclick" />
      <input type="hidden" name="hosted_button_id" value="2GGJX5EDLQQ5U" />
      <input
        type="submit"
        border="0"
        class="btn"
        name="Donate"
        title="Donate to Quantum Reform!"
        alt="Donate button"
      />
    </form>
  </div>
</template>
<style scoped></style>
