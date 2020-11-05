<template>
  <div>
      <div class="pagination">
            <button
            :disabled="currentPageNum === 1"
             @click="$emit('changeNum', currentPageNum - 1)"
          
          >
            上一页
          </button>
          <button v-if="startEnd.start !== 1"  @click="$emit('changeNum', 1)" >
            1
          </button>
          <button v-if="startEnd.start > 2">···</button>

          <!-- vfor和vif两个指令可以混用
          如果他们混用了，vfor的优先级比vif高
          startEnd.start连续页最后一页，遍历一个数字进行判断，符合标准进行展示
          -->
          <button
          
            :class="{ active: currentPageNum === page }"
      
            v-for="page in startEnd.end"
            :key="page"
            v-if="page >= startEnd.start"
            @click="$emit('changeNum',page)"

          >
            {{ page }}
          </button>

           <button v-if="startEnd.end < totalPageNum - 1" >···</button>
           <button v-if="startEnd.end !== totalPageNum" @click="$emit('changeNum', totalPageNum)">{{ totalPageNum }}</button>
    <button :disabled="currentPageNum === totalPageNum" @click="$emit('changeNum', currentPageNum + 1)">下一页</button>

       <button style="margin-left: 30px">共 {{ total }} 条</button>
      </div>
    </div>
</template>

<script>
  export default {
      name:'',
 props: {
  currentPageNum: Number,
  pageSize: Number,
  total: {
    type: Number,
    default: 0,
  },
  continueNum: {
    type: Number,
    required: true,
  },
},

computed:{
  totalPageNum(){//总页数
    return Math.ceil(this.total/this.pageSize);
  },
  startEnd(){
    let {currentPageNum,continueNum,totalPageNum}=this
    let start,end
       if (totalPageNum <= continueNum) {
      //如果我们计算出来的总页数比连续页数小
        start = 1;
        end = totalPageNum;
    }else{
      //计算起止位置和结束位置，除去左右两端
      start = currentPageNum - Math.floor(continueNum / 2);
      end = currentPageNum + Math.floor(continueNum / 2);
      //修正左右两端情况
      if(start<1){
        start =1
        end=continueNum
      }
      if(end>totalPageNum){
        end=totalPageNum
        start=totalPageNum-continueNum
      }
    }
      return { start, end };

  }
}


  }
</script>

<style lang="less" scoped>
.page {
  width: 733px;
  height: 66px;
  overflow: hidden;
  float: right;

  .sui-pagination {
    margin: 18px 0;

    ul {
      margin-left: 0;
      margin-bottom: 0;
      vertical-align: middle;
      width: 490px;
      float: left;

      li {
        line-height: 18px;
        display: inline-block;

        a {
          position: relative;
          float: left;
          line-height: 18px;
          text-decoration: none;
          background-color: #fff;
          border: 1px solid #e0e9ee;
          margin-left: -1px;
          font-size: 14px;
          padding: 9px 18px;
          color: #333;
        }

        &.active {
          a {
            background-color: #fff;
            color: #e1251b;
            border-color: #fff;
            cursor: default;
          }
        }

        &.prev {
          a {
            background-color: #fafafa;
          }
        }

        &.disabled {
          a {
            color: #999;
            cursor: default;
          }
        }

        &.dotted {
          span {
            margin-left: -1px;
            position: relative;
            float: left;
            line-height: 18px;
            text-decoration: none;
            background-color: #fff;
            font-size: 14px;
            border: 0;
            padding: 9px 18px;
            color: #333;
          }
        }

        &.next {
          a {
            background-color: #fafafa;
          }
        }
      }
    }
  }
}

.pagination {
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
