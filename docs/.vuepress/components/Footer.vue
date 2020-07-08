<template>
  <div class="footer">
    <div class="col">
      <div class="col-title">Location</div>
      <br />Quantum Reform LLc
      <br />
      <p class="small">2029 Verdugo Blvd Montrose, CA 91020</p>
    </div>
    <div class="col">
      <div class="col-title">Hours</div>
      <p
      Monday — Friday <br />1pm — 8pm </p>
      <p>Saturday — Sunday <br />closed</p>
    </div>
    <div class="col">
      <div class="col-title">Contact</div>
      <br />email@example.com
    </div>
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.footer {
  display: flex;
  width: 90%;
  margin: 0 auto;
  justify-content: space-between;
}
.col {
  width: 20%;
  text-align: center;
}
.col-title {
  font-size: 1.6em;
  font-family: 'Cormorant Garamond', serif;
}
p.small{
  font-size:calc(-.12vw +  1rem);
}
</style>
