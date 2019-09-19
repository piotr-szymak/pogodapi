 <template>
  <div id="room_temp">
    <div class="bitcoin-price">
      <svg style="width:0; height:0; position:absolute;" aria-hidden="true" focusable="false">
        <defs>
          <linearGradient id="btcFill" x1="1" x2="1" y1="0" y2="1">
            <stop offset="0%" stop-color="#f69119" />
            <stop offset="100%" stop-color="#ffffff" />
          </linearGradient>
        </defs>
      </svg>
      <trend-chart
        v-if="dataset.length"
        :datasets="[{data: dataset, fill: true, className: ''}]"
        :labels="labels"
        :min="0"
        :grid="grid"
      />
    </div>
  </div>
</template>


<style lang="scss" scoped>
#room_temp {
  margin-top: 4rem;
}
.bitcoin-price {
  .vtc {
    height: 250px;
    font-size: 12px;
    @media (min-width: 699px) {
      height: 350px;
    }
  }
  .grid,
  .labels {
    line {
      stroke: rgba(#ffffff, 0.5);
    }
  }
  .x-labels {
    .label {
      text {
        display: none;
      }
      line {
        opacity: 0.3;
      }
      &:nth-child(6n + 1),
      &:first-child {
        text {
          display: block;
        }
        line {
          opacity: 1;
        }
      }
    }
  }
  .curve-btc {
    .stroke {
      stroke: #f69119;
      stroke-width: 2;
    }
    .fill {
      fill: url(#btcFill);
      fill-opacity: 0.5;
    }
  }
}
</style>

<script>
import moment from 'moment';
import axios from 'axios';
import VueAxios from 'vue-axios';
import Vue from 'vue'

Vue.use(VueAxios, axios);

export default {
  data: () => ({
    dataset: [],
    labels: {
      xLabels: [],
      yLabels: 10,
      yLabelsTextFormatter: val => Math.round(val * 10) / 10
      ,
      XLabelsTextFormatter: val => val.substring(0, 2)
    },
    grid: {
      verticalLines: true,
      verticalLinesNumber: 1,
      horizontalLines: true,
      horizontalLinesNumber: 1
    }
  }),
  mounted() {
    axios
      .get(
        "http://192.168.1.31/temperatura-10"
      )
      .then(res => {
        console.log(res.data.temp);
        const data = res.data.temp;
        var prevlab=0;
        for (let key in data) {
          //console.log(data);
          this.dataset.push(data[key]);
          //this.labels.xLabels.push(moment(data[key]).format("HH"));
          var lab=key.substring(0, 2);
          
          console.log(lab);
          if (lab!=prevlab)
          { 
            this.labels.xLabels.push(key.substring(0, 2));
          }
          else
          {
            this.labels.xLabels.push('');
          }
          prevlab=lab;
        }
      });
  }
}

//  mounted() {
//     axios
//       .get(
//         "https://api.coindesk.com/v1/bpi/historical/close.json?start=2019-01-01&end=2019-01-07",
//         "http://192.168.1.31/temperatura-10"
//       )
//       .then(res => {
//         console.log(res.data);
        
//         const data = res.data.bpi;
//         for (let key in data) {
//           this.dataset.push(data[key]);
//           this.labels.xLabels.push(moment(key).format("MM/DD"));
//         }
//       });
//   }
// }
</script>