<template>
  <div class="contact text-left">
    <div class="col">
      <h2 class="large--text">Contact us</h2>
      <strong>Email</strong>
      <p>email@example.com</p>
    </div>
    <div class="form-wrapper">
      <form id="contact_form" action method="POST" enctype="multipart/form-data">
        <div class="field-list clear">
          <fieldset id="name" class="form-item fields name required">
            <legend class="title">
              Name
              <span class="required" aria-hidden="true">*</span>
            </legend>

            <div class="field first-name">
              <label class="caption">
                <input
                  class="field-element field-control"
                  name="firstname"
                  x-autocompletetype="given-name"
                  type="text"
                  spellcheck="false"
                  maxlength="30"
                  data-title="First"
                  aria-required="true"
                  ref="firstname"
                />
                <span class="caption-text">First Name</span>
              </label>
            </div>
            <div class="field last-name">
              <label class="caption">
                <input
                  class="field-element field-control"
                  name="lastname"
                  x-autocompletetype="surname"
                  type="text"
                  spellcheck="false"
                  maxlength="30"
                  data-title="Last"
                  aria-required="true"
                  ref="lastname"
                />
                <span class="caption-text">Last Name</span>
              </label>
            </div>
          </fieldset>

          <div id="email-yui_3_17_2_1_1554218195091_8244" class="form-item field email required">
            <label class="title" for="email-yui_3_17_2_1_1554218195091_8244-field">
              Email
              <span class="required" aria-hidden="true">*</span>
            </label>

            <input
              class="field-element"
              id="email-yui_3_17_2_1_1554218195091_8244-field"
              name="email"
              type="email"
              autocomplete="email"
              spellcheck="false"
              aria-required="true"
              ref="email"
            />
          </div>

          <fieldset
            id="phone-yui_3_17_2_1_1558357554822_54430"
            class="form-item fields phone required"
          >
            <legend class="title">
              Phone
              <span class="required" aria-hidden="true">*</span>
            </legend>

            <div class="field text three-digits">
              <label class="caption">
                <input
                  class="field-element"
                  x-autocompletetype="phone-area-code"
                  type="text"
                  maxlength="3"
                  data-title="Areacode"
                  aria-required="true"
                  ref="phone"
                />
                <span class="caption-text">(###)</span>
              </label>
            </div>
            <div class="field text three-digits">
              <label class="caption">
                <input
                  class="field-element"
                  x-autocompletetype="phone-local-prefix"
                  type="text"
                  maxlength="3"
                  data-title="Prefix"
                  aria-required="true"
                />
                <span class="caption-text">###</span>
              </label>
            </div>
            <div class="field text four-digits">
              <label class="caption">
                <input
                  class="field-element"
                  x-autocompletetype="phone-local-suffix"
                  type="text"
                  maxlength="4"
                  data-title="Line"
                  aria-required="true"
                />
                <span class="caption-text">####</span>
              </label>
            </div>
          </fieldset>

          <div id="text-yui_3_17_2_1_1558357554822_56100" class="form-item field text required">
            <label class="title" for="text-yui_3_17_2_1_1558357554822_56100-field">
              Subject
              <span class="required" aria-hidden="true">*</span>
            </label>

            <input
              class="field-element text"
              type="text"
              id="text-yui_3_17_2_1_1558357554822_56100-field"
              aria-required="true"
              ref="subject"
            />
          </div>

          <div
            id="textarea-yui_3_17_2_1_1554218195091_8246"
            class="form-item field textarea required"
          >
            <label class="title" for="textarea-yui_3_17_2_1_1554218195091_8246-field">
              Message
              <span class="required" aria-hidden="true">*</span>
            </label>

            <textarea
              class="field-element"
              id="textarea-yui_3_17_2_1_1554218195091_8246-field"
              aria-required="true"
              name="message"
              ref="message"
            ></textarea>
          </div>
        </div>
        <div
          data-animation-role="button"
          class="form-button-wrapper form-button-wrapper--align-left"
        >
          <input class="button btn" type="submit" value="Submit" @click.prevent="sendEmail()" />
          <div class="hidden form-submission-text">Thank you!</div>
          <div class="hidden form-submission-html" data-submission-html></div>
        </div>
      </form>
      <div id="after_submit"></div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("jere");
  },
  methods: {
    sendEmail: function() {
      // $("#mail-status").hide();
      // $('#send-message').hide();
      // $('#loader-icon').show();
      const data = {};
      ["firstname", "lastname", "email", "phone", "message"].forEach(
        field => (data[field] = this.$refs[field].value)
      );

      fetch("contact.php", {
        method: "POST",
        dataType: "json",
        body: JSON.stringify(data)
      })
        .then(response => {
          console.log(response);
          if (response.type == "error") {
          } else if (response.type == "message") {
            // $('#send-message').hide();
            // $("#mail-status").attr("class","success");
          }
          //	$("#mail-status").html(response.text);
        })
        .catch(err => console.log(err));
    }
  }
};
</script>
<style scoped lang="scss">
.contact {
  display: flex;
  .col {
    width: 50%;
    text-align: left;
  }
}
@media (max-width: 719px) {
  .contact {
    display: block;
    .col {
      width: 100%;
    }
  }
}
.field-error {
  border-radius: 2px;
  background: #cc3b3b
    url("//assets.squarespace.com/universal/images-v6/standard/icon_close_7_light.png")
    no-repeat 9px 50%;
  color: #fff;
  display: inline-block;
  font-size: 13px;
  line-height: 23px;
  margin: 12px 0;
  padding: 5px 15px 3px 25px;
}

.form-wrapper .field-list {
  line-height: normal;
}

.form-wrapper .field-list fieldset,
.form-wrapper .field-list legend {
  margin: 0;
  padding: 0;
  border: 0;
}

.form-wrapper .field-list textarea {
  min-height: 100px;
  resize: vertical;
}

.form-wrapper .field-list textarea.medium {
  min-height: 200px;
}

.form-wrapper .field-list textarea.large {
  min-height: 300px;
}

.form-wrapper .field-list .section {
  margin: 2em 0;
  padding-bottom: 0.3em;
  font-size: 0.9em;
}

.form-wrapper .field-list .section.underline {
  border-bottom: 1px solid #999;
}

.form-wrapper .field-list .section:nth-child(1) {
  margin: 0 0 2em 0;
}

.form-wrapper .field-list .title {
  text-align: left;
  display: block;
}

.form-wrapper .field-list .description {
  padding: 0.5em 0 0.5em;
  font-size: 12px;
  opacity: 0.7;
  display: block;
  white-space: pre-wrap;
}

.form-wrapper .field-list .field {
  position: relative;
  margin: 0 0 24px;
}

.form-wrapper .field-list .field .caption {
  font-size: 12px;
}

.form-wrapper .field-list .field .caption .field-element {
  font-size: 14px;
}

.form-wrapper .field-list .field .field-element {
  width: 100%;
  padding: 12px;
  margin: 6px 0 4px;
  border: 1px solid #ccc;
  background: #fafafa;
  color: #000;
  font-family: sans-serif;
  font-size: 12px;
  line-height: normal;
  box-sizing: border-box;
  border-radius: 2px;
}

.form-wrapper .field-list .field .field-element:focus {
  background: #fff;
  -webkit-transition: background 0.1s ease-in;
  transition: background 0.1s ease-in;
}

.form-wrapper .field-list .field .prefix {
  position: absolute;
  bottom: 16px;
  left: 8px;
  color: #aaa;
  font-family: sans-serif;
  font-size: 13px;
  line-height: 16px;
}

.form-wrapper .field-list .fields {
  margin: 0 0 0 -2%;
  text-align: left;
}

.form-wrapper .field-list .fields .title,
.form-wrapper .field-list .fields .description,
.form-wrapper .field-list .fields .field,
.form-wrapper .field-list .fields .field-error {
  margin-left: 2%;
}

.form-wrapper .field-list .fields .field {
  float: left;
}

.form-wrapper .field-list .fields .field.two-digits {
  width: 3.5em;
}

.form-wrapper .field-list .fields .field.three-digits {
  width: 4.2em;
}

.form-wrapper .field-list .fields .field.four-digits {
  width: 4.8em;
}

.form-wrapper .field-list .fields .field.ampm {
  width: 4.5em;
}

.form-wrapper .field-list .fields.name .field {
  width: 48%;
}

.form-wrapper .field-list .fields.address .field.address1,
.form-wrapper .field-list .fields.address .field.address2 {
  width: 98%;
}

.form-wrapper .field-list .fields.address .field.city {
  width: 70%;
}

.form-wrapper .field-list .fields.address .field.state-province {
  width: 26%;
}

.form-wrapper .field-list .fields.address .field.zip {
  width: 36%;
}

.form-wrapper .field-list .fields.address .field.country {
  width: 98%;
}

.form-wrapper .field-list .form-item.error,
.form-wrapper .field-list .form-item.error .caption,
.form-wrapper .field-list .form-item.error .title,
.form-wrapper .field-list .form-item.error .description {
  color: #bd0000;
}

.form-wrapper .field-list .form-item.error input,
.form-wrapper .field-list .form-item.error textarea {
  border: 1px solid #e99292;
}

.form-wrapper .form-button-wrapper--align-left {
  text-align: left;
}

.form-wrapper .form-button-wrapper--align-center {
  text-align: center;
}

.form-wrapper .form-button-wrapper--align-right {
  text-align: right;
}

.form-wrapper input[type="submit"] {
  display: inline-block;
  width: auto;
  height: auto;
  padding: 1em 2.5em;
  color: #fff;
  background-color: #272727;
  border-width: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 12px;
  line-height: 1em;
  font-weight: normal;
  font-style: normal;
  text-transform: uppercase;
  letter-spacing: 0px;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  font-size: 14px;
  text-transform: none;
}

.form-wrapper .form-submission-text {
  margin-top: 20px;
}

.form-wrapper .field .field-error {
  margin-bottom: 0.5em;
}

.form-wrapper .submitting .field-list {
  opacity: 0.7;
}

.form-wrapper .hidden,
.form-wrapper.hidden {
  display: none;
}

.form-block .lightbox-handle-wrapper--align-left {
  text-align: left;
}

.form-block .lightbox-handle-wrapper--align-center {
  text-align: center;
}

.form-block .lightbox-handle-wrapper--align-right {
  text-align: right;
}
</style>