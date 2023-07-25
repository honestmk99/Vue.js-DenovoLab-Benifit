<template>
  <div
    class="m-auto px-155 -md-px-39 -sm-px-15 mt-120 -md-mt-80 -sm-mt-60 grid gap-98 grid-order pb-120 -sm-pb-60"
  >
    <div
      class="shadow-primary p-30 -sm-px-0 flex flex-column gap-62 text-center"
    >
      <div class="flex flex-column gap-18 text-center relative">
        <h1 class="m-0 font-h3 text-primary">Benefit Finder</h1>
        <h1 class="m-0 font-h4 font-medium text-primary">
          The more questions you answer, the more accurate the results
        </h1>
        <div class="m-auto hidden -sm-block">
          <div
            class="rounded-12 font-h6 font-semibold text-input px-18 py-12 border-2"
          >
            Close Finder
          </div>
        </div>
        <div class="absolute top-0 right-0 -sm-hidden">
          <div
            class="rounded-12 font-h6 font-semibold text-input px-18 py-12 border-2"
          >
            Close Finder
          </div>
        </div>
      </div>
      <div class="flex flex-column gap-42 w-528 -sm-w-330 m-auto">
        <div class="flex flex-column gap-18">
          <div class="grid grid-template gap-17">
            <div
              class="bg-blue rounded-full w-30 h-30 flex align-items-center justify-content-center text-white"
            >
              1
            </div>
            <h1
              class="m-0 text-primary font-lato font-medium font-card align-self-center justify-self-start"
            >
              What is your date of birth?
            </h1>
          </div>
          <div class="flex gap-8">
            <div class="select-item w-full">
              <label class="select" for="slct">
                <select id="slct" required="required">
                  <option value="" disabled="disabled" selected="selected">
                    Select year
                  </option>
                  <option value="#">One</option>
                  <option value="#">Two</option>
                  <option value="#">Three</option>
                  <option value="#">Four</option>
                  <option value="#">Five</option>
                  <option value="#">Six</option>
                  <option value="#">Seven</option>
                </select>
                <svg>
                  <use xlink:href="#select-arrow-down"></use>
                </svg>
              </label>
              <svg class="sprites">
                <symbol id="select-arrow-down" viewbox="0 0 10 6">
                  <polyline points="1 1 5 5 9 1"></polyline>
                </symbol>
              </svg>
            </div>
            <div class="select-item w-full">
              <label class="select" for="slct">
                <select id="slct" required="required">
                  <option value="" disabled="disabled" selected="selected">
                    Select month
                  </option>
                  <option value="#">One</option>
                  <option value="#">Two</option>
                  <option value="#">Three</option>
                  <option value="#">Four</option>
                  <option value="#">Five</option>
                  <option value="#">Six</option>
                  <option value="#">Seven</option>
                </select>
                <svg>
                  <use xlink:href="#select-arrow-down"></use>
                </svg>
              </label>
              <svg class="sprites">
                <symbol id="select-arrow-down" viewbox="0 0 10 6">
                  <polyline points="1 1 5 5 9 1"></polyline>
                </symbol>
              </svg>
            </div>
            <div class="select-item w-full">
              <label class="select" for="slct">
                <select id="slct" required="required">
                  <option value="" disabled="disabled" selected="selected">
                    Select day
                  </option>
                  <option value="#">One</option>
                  <option value="#">Two</option>
                  <option value="#">Three</option>
                  <option value="#">Four</option>
                  <option value="#">Five</option>
                  <option value="#">Six</option>
                  <option value="#">Seven</option>
                </select>
                <svg>
                  <use xlink:href="#select-arrow-down"></use>
                </svg>
              </label>
              <svg class="sprites">
                <symbol id="select-arrow-down" viewbox="0 0 10 6">
                  <polyline points="1 1 5 5 9 1"></polyline>
                </symbol>
              </svg>
            </div>
          </div>
        </div>
        <div class="flex flex-column gap-18">
          <div class="grid grid-template gap-17">
            <div
              class="bg-blue rounded-full w-30 h-30 flex align-items-center justify-content-center text-white"
            >
              2
            </div>
            <h1
              class="m-0 text-primary font-lato font-medium font-card align-self-center justify-self-start"
            >
              Choose the option that best describes your citizenship status:
            </h1>
          </div>
          <div class="select-item w-full">
            <label class="select" for="slct">
              <select id="slct" required="required">
                <option value="" disabled="disabled" selected="selected">
                  Select year
                </option>
                <option value="#">One</option>
                <option value="#">Two</option>
                <option value="#">Three</option>
                <option value="#">Four</option>
                <option value="#">Five</option>
                <option value="#">Six</option>
                <option value="#">Seven</option>
              </select>
              <svg>
                <use xlink:href="#select-arrow-down"></use>
              </svg>
            </label>
            <svg class="sprites">
              <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
              </symbol>
            </svg>
          </div>
        </div>
        <div class="flex flex-column gap-18">
          <div class="grid grid-template gap-17">
            <div
              class="bg-blue rounded-full w-30 h-30 flex align-items-center justify-content-center text-white"
            >
              3
            </div>
            <h1
              class="m-0 text-primary font-lato font-medium font-card align-self-center justify-self-start"
            >
              In which U.S. State or Territory do you live?
            </h1>
          </div>
          <div class="select-item w-full">
            <label class="select" for="slct">
              <select id="slct" required="required">
                <option value="" disabled="disabled" selected="selected">
                  Select year
                </option>
                <option value="#">One</option>
                <option value="#">Two</option>
                <option value="#">Three</option>
                <option value="#">Four</option>
                <option value="#">Five</option>
                <option value="#">Six</option>
                <option value="#">Seven</option>
              </select>
              <svg>
                <use xlink:href="#select-arrow-down"></use>
              </svg>
            </label>
            <svg class="sprites">
              <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
              </symbol>
            </svg>
          </div>
        </div>
        <div class="flex flex-column gap-18">
          <div class="grid grid-template gap-17">
            <div
              class="bg-blue rounded-full w-30 h-30 flex align-items-center justify-content-center text-white"
            >
              4
            </div>
            <h1
              class="m-0 text-primary font-lato font-medium font-card align-self-center justify-self-start"
            >
              How many people live in your household (including yourself)?
            </h1>
          </div>
          <input
            type="text"
            placeholder="8"
            class="px-12 py-8 rounded-8 border-none border text-input"
          />
        </div>
        <div class="flex flex-column gap-18">
          <div class="grid grid-template gap-17">
            <div
              class="bg-blue rounded-full w-30 h-30 flex align-items-center justify-content-center text-white"
            >
              5
            </div>
            <h1
              class="m-0 text-primary font-lato font-medium font-card align-self-center justify-self-start"
            >
              What is your household's annual income before taxes?
            </h1>
          </div>
          <input
            type="text"
            placeholder="Enter value"
            class="px-12 py-8 rounded-8 border-none border text-input"
          />
        </div>
        <div class="flex flex-column gap-18">
          <div class="grid grid-template gap-17">
            <div
              class="bg-blue rounded-full w-30 h-30 flex align-items-center justify-content-center text-white"
            >
              6
            </div>
            <h1
              class="m-0 text-primary font-lato font-medium font-card align-self-center justify-self-start"
            >
              What is your current employment status?
            </h1>
          </div>
          <div class="select-item w-full">
            <label class="select" for="slct">
              <select id="slct" required="required">
                <option value="" disabled="disabled" selected="selected">
                  Select
                </option>
                <option value="#">One</option>
                <option value="#">Two</option>
                <option value="#">Three</option>
                <option value="#">Four</option>
                <option value="#">Five</option>
                <option value="#">Six</option>
                <option value="#">Seven</option>
              </select>
              <svg>
                <use xlink:href="#select-arrow-down"></use>
              </svg>
            </label>
            <svg class="sprites">
              <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
              </symbol>
            </svg>
          </div>
        </div>
        <div class="flex flex-column gap-18">
          <div class="grid grid-template gap-17">
            <div
              class="bg-blue rounded-full w-30 h-30 flex align-items-center justify-content-center text-white"
            >
              7
            </div>
            <h1
              class="m-0 text-primary font-lato font-medium font-card align-self-center justify-self-start"
            >
              Are you currently married?
            </h1>
          </div>
          <div class="flex gap-32 pl-52">
            <div>
              <input type="radio" id="yes" name="fav_language" value="yes" />
              <label for="yes">Yes</label><br />
            </div>
            <div>
              <input type="radio" id="no" name="fav_language" value="no" />
              <label for="no">No</label><br />
            </div>
          </div>
        </div>
        <div class="flex flex-column gap-18">
          <div class="grid grid-template gap-17">
            <div
              class="bg-blue rounded-full w-30 h-30 flex align-items-center justify-content-center text-white"
            >
              8
            </div>
            <h1
              class="m-0 text-primary font-lato font-medium font-card align-self-center justify-self-start"
            >
              How many times have you been married? (0-10)
            </h1>
          </div>
          <div class="select-item w-full">
            <label class="select" for="slct">
              <select id="slct" required="required">
                <option value="" disabled="disabled" selected="selected">
                  Select
                </option>
                <option value="#">One</option>
                <option value="#">Two</option>
                <option value="#">Three</option>
                <option value="#">Four</option>
                <option value="#">Five</option>
                <option value="#">Six</option>
                <option value="#">Seven</option>
              </select>
              <svg>
                <use xlink:href="#select-arrow-down"></use>
              </svg>
            </label>
            <svg class="sprites">
              <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
              </symbol>
            </svg>
          </div>
        </div>
        <div class="flex flex-column gap-18">
          <div class="grid grid-template gap-17">
            <div
              class="bg-blue rounded-full w-30 h-30 flex align-items-center justify-content-center text-white"
            >
              9
            </div>
            <h1
              class="m-0 text-primary font-lato font-medium font-card align-self-center justify-self-start"
            >
              Are you disabled?
            </h1>
          </div>
          <div class="select-item w-full">
            <label class="select" for="slct">
              <select id="slct" required="required">
                <option value="" disabled="disabled" selected="selected">
                  Select
                </option>
                <option value="#">One</option>
                <option value="#">Two</option>
                <option value="#">Three</option>
                <option value="#">Four</option>
                <option value="#">Five</option>
                <option value="#">Six</option>
                <option value="#">Seven</option>
              </select>
              <svg>
                <use xlink:href="#select-arrow-down"></use>
              </svg>
            </label>
            <svg class="sprites">
              <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
              </symbol>
            </svg>
          </div>
        </div>
        <div class="flex flex-column gap-18">
          <div class="grid grid-template gap-17">
            <div
              class="bg-blue rounded-full w-30 h-30 flex align-items-center justify-content-center text-white"
            >
              10
            </div>
            <h1
              class="m-0 text-primary font-lato font-medium font-card align-self-center justify-self-start"
            >
              Are you blind or partially blind?
            </h1>
          </div>
          <div class="select-item w-full">
            <label class="select" for="slct">
              <select id="slct" required="required">
                <option value="" disabled="disabled" selected="selected">
                  Select
                </option>
                <option value="#">One</option>
                <option value="#">Two</option>
                <option value="#">Three</option>
                <option value="#">Four</option>
                <option value="#">Five</option>
                <option value="#">Six</option>
                <option value="#">Seven</option>
              </select>
              <svg>
                <use xlink:href="#select-arrow-down"></use>
              </svg>
            </label>
            <svg class="sprites">
              <symbol id="select-arrow-down" viewbox="0 0 10 6">
                <polyline points="1 1 5 5 9 1"></polyline>
              </symbol>
            </svg>
          </div>
        </div>
      </div>
      <div class="h-8 w-full rounded-8 bg-slate relative">
        <div class="bg-blue rounded-8 absolute top-0 left-0 w-40 h-full"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.select {
  position: relative;
  min-width: 200px;
}
.grid-template {
  grid-template-columns: auto 1fr;
}
.select svg {
  position: absolute;
  right: 12px;
  top: calc(50% - 3px);
  width: 10px;
  height: 6px;
  stroke-width: 2px;
  stroke: #9098a9;
  fill: none;
  stroke-linecap: round;
  stroke-linejoin: round;
  pointer-events: none;
}
.select select {
  -webkit-appearance: none;
  padding: 8px 40px 8px 12px;
  width: 100%;
  border: 1px solid #e8eaed;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 1px 3px -2px #9098a9;
  cursor: pointer;
  font-family: inherit;
  font-size: 16px;
  transition: all 150ms ease;
  color: #727b8b;
}
.select select:required:invalid {
  color: #5a667f;
}
.select select option {
  color: #223254;
}
.select select option[value=""][disabled] {
  display: none;
}
.select select:focus {
  outline: none;
  border-color: #07f;
  box-shadow: 0 0 0 2px rgba(0, 119, 255, 0.2);
}
.select select:hover + svg {
  stroke: #07f;
}
.sprites {
  position: absolute;
  width: 0;
  height: 0;
  pointer-events: none;
  user-select: none;
}
</style>