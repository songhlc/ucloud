<template>
  <div class="box-sticky-ctn">
    <div class="box-sticky" id="box-sticky">
      <Row>
        <Col span="4" class="box-sticky-title">
          <span class="title">{{title}}</span>
        </Col>
        <slot></slot>
      </Row>
    </div>
  </div>
</template>
<script>
  var $ = window.$
  export default {
    name: 'boxsticky',
    props: {
      title: String
    },
    data () {
      return {
        anchor: null,
        anchorlist: [],
        o: {
          currentTop: null,
          topSpacing: 0,
          className: 'is-sticky'
        }
      }
    },
    mounted () {
      let stickyElement = $('#box-sticky')
      var stickyWrapper = stickyElement.parent()
      this.o.stickyElement = stickyElement
      this.o.stickyWrapper = stickyWrapper
      //
      if (window.addEventListener) {
        window.addEventListener('scroll', this.scroller, false)
        // TODO 浏览器窗口resize的时候也需要重新计算
        // window.addEventListener('resize', resizer, false)
      } else if (window.attachEvent) {
        window.attachEvent('onscroll', this.scroller)
      }
      setTimeout(this.scroller, 0)
      stickyElement.delegate('.sticky-anchor', 'click', function () {
        if (window.location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && window.location.hostname === this.hostname) {
          var target = $(this.hash)
          $('.sticky-anchor').removeClass('active')
          $(this).addClass('active')
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: target.offset().top - 40
            }, 1000)
            return false
          }
        }
      })
    },
    methods: {
      scroller () {
        // 如果不存在元素
        var that = this
        // 如果不存在元素
        if (!window.anchor) {
          window.anchor = $('.sticky-anchor')
          window.anchor.each(function () {
            that.anchorlist.push($(this).attr('href'))
          })
        }
        this.anchorlist.forEach(function (item) {
          if ($(item).length > 0) {
            let pos = $(item).offset().top - $('body').scrollTop()
            let heightDiff = pos - $(window).height() / 2
            // 确保滚轮滚动时 会定位到相应的选项 增大第一个 的阈值 当滚动条小于10则认为到了最顶部
            if (heightDiff < 50 && heightDiff >= -200) {
              if (!($('.sticky-anchor[href="' + item + '"]').hasClass('active'))) {
                $('.sticky-anchor').removeClass('active')
                $('.sticky-anchor[href="' + item + '"]').addClass('active')
              }
            }
            if ($('body').scrollTop() < 10) {
              $('.sticky-anchor').removeClass('active')
              $('.sticky-anchor').eq(0).addClass('active')
            }
          }
        })
        var o = this.o
        // update height in case of dynamic content
        o.stickyWrapper.css('height', o.stickyElement.outerHeight())
        let scrollTop = $(window).scrollTop()
        let documentHeight = $(document).height()
        let windowHeight = $(window).height()
        let dwh = documentHeight - windowHeight
        let extra = (scrollTop > dwh) ? dwh - scrollTop : 0

        let elementTop = o.stickyWrapper.offset().top
        let etse = elementTop - o.topSpacing - extra

        o.stickyWrapper.css('height', o.stickyElement.outerHeight())
        if (scrollTop <= etse) {
          if (o.currentTop !== null) {
            o.stickyElement
              .css({
                'width': '',
                'position': '',
                'top': '',
                'z-index': ''
              })
            o.stickyElement.parent().removeClass(o.className)
            o.currentTop = null
          }
        } else {
          var newTop = documentHeight - o.stickyElement.outerHeight() - o.topSpacing - o.bottomSpacing - scrollTop - extra
          if (newTop < 0) {
            newTop = newTop + o.topSpacing
          } else {
            newTop = o.topSpacing
          }
          if (o.currentTop !== newTop) {
            var newWidth
            if (newWidth == null) {
              newWidth = o.stickyElement.outerWidth()
            }
            o.stickyElement
              .css('width', newWidth)
              .css('position', 'fixed')
              .css('top', newTop)
              .css('z-index', o.zIndex)

            o.stickyElement.parent().addClass(o.className)
            o.currentTop = newTop
          }

          // Check if sticky has reached end of container and stop sticking
          var stickyWrapperContainer = o.stickyWrapper.parent()
          var unstick = (o.stickyElement.offset().top + o.stickyElement.outerHeight() >= stickyWrapperContainer.offset().top + stickyWrapperContainer.outerHeight()) && (o.stickyElement.offset().top <= o.topSpacing)

          if (unstick) {
            o.stickyElement
              .css('position', 'absolute')
              .css('top', '')
              .css('bottom', 0)
              .css('z-index', '')
          } else {
            o.stickyElement
              .css('position', 'fixed')
              .css('top', newTop)
              .css('bottom', '')
              .css('z-index', o.zIndex)
          }
        }
      }
    }
  }
</script>
<style lang="less">
  .box-sticky-ctn{
    overflow: hidden;
    margin-bottom: 10px;
    .title{
      font-size: 16px;
      font-weight: normal;
      line-height: 30px;
      margin-right: 20px;
      color: #333333;
    }
  .box-sticky {
    padding: 9px 20px 9px;
    border: none;
    background-color: #FFF;
    min-height: 48px;
    margin-left: 0;
    margin-right: 0;
    z-index: 1001;
    box-shadow: 0px 0px 5px #333;
  .box-filter-title {
    font-size: 16px;
    font-weight: normal;
    line-height: 32px;
    margin-right: 20px;
    color: #333333;
  }
  }
  }
  .sticky-anchor {
    font-size: 14px;
    display: inline-block;
    position: relative;
    padding: 5px 5px 2px 8px;
    text-decoration: none;
    background: transparent;
    color: #999;
  }
  .sticky-anchor.active {
    color: #333;
  }
  .sticky-anchor:after {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    background-color: transparent;
    bottom: 0;
    left: 0;
    transition: all 0.5s;
  }

  .sticky-anchor::after {
    background-color: #F4786B;
    transform: scaleX(0);
    opacity: 0;
  }
  .sticky-anchor.active::after {
    opacity: 1;
    transform: scaleX(1);
  }
  .text-center{
    text-align: center;
  }

</style>
