  (function($) {
    $.fn.table_to_div = function(options) {
      var settings = $.extend({}, {prefix: 'tg',target:''}, options);
      return this.each(function() {
        var output = "";
        var data = "";
        settings.prefix = settings.prefix+"_";
        columns = [];
        table_target = $(this);
        var tr_count=0;
        console.log(options);
        if(options.noheader==true){
          tr_count = 1;
        }
        //LOOP OVER ALL ROWS
        $(table_target).find('tr').each(function(){
          var col_count = 0;
          //LOW OVER EACH COLUMN IN THE ROW
          $(this).find('th,td').each(function(){
            var element = $(this).html();
            if(tr_count ==0){
              //HEADER COLUMN
              columns.push($(this).html());
            }else{
              //CONTENT COLUMN, strip leading and trailing whitespace
              data+= '      <div class="'+settings.prefix+col_count+' '+settings.prefix+'row">\n';
              if(options.noheader!=true){
                data+= '         <label>'+columns[col_count]+'</label>\n';
              }
              data+= '         <span>'+element.replace(/^\s\s*/, '').replace(/\s\s*$/, '')+'</span>\n';
              data+= '      </div>\n';
            }
            col_count++;
          });
          if(tr_count != 0){
            output+='   <div class="'+settings.prefix+tr_count+' '+settings.prefix+'group">\n';
            output+= data;
            output+= '   </div>\n';
            data = "";
          }
          tr_count++;
        });
        output = '<div class="'+settings.prefix+'container">\n'+output+'</div>\n';
        if(settings.target.length > 0){
          $(settings.target).html(output);
        }else{
          $(table_target).before(output);
        }
      });
    };
  })(jQuery);
