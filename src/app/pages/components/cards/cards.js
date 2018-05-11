function commentCards(el){
  return el.each(function(){
    var $this = $(el),
      $cards = $this.find('.card'),
      $current = $cards.filter('.card--current'),
      $next;
    $cards.on('click',function(){
      if ( !$current.is(this)) {
        next(this);
      }
    });
    var next=function (_this) {
      $cards.removeClass('card--current card--out card--next');
      $current.addClass('card--out');
      $current = $(_this).addClass('card--current');
      $next = $current.next();
      $next = $next.length ? $next : $cards.first();
      $next.addClass('card--next');
    };
    var prev=function (_this) {
    };
    if ( !$current.length ) {
      $current = $cards.last();
      next($cards.first());
    }
    $this.addClass('cards--active');
  })
}
module.exports.commentCards=commentCards;
