  (function($) {
    $.fn.table_to_div = function(options) {
      var settings = $.extend({}, {prefix: 'tg',target:''}, options);
      return this.each(function() {            
        var output = "";
        var data = "";
        settings.prefix = settings.prefix+"_";
        columns = [];
        table_target = ".whatever";
        var tr_count=0;
        //LOOP OVER ALL ROWS
        $(table_target+' tr').each(function(){
          var col_count = 0;
          //LOW OVER EACH COLUMN IN THE ROW
          $(this).find('th,td').each(function(){        
            var element = $(this).html();        
            if(tr_count ==0){
              //HEADER COLUMN
              columns.push($(this).html().replace(/\s+/g,''));
            }else{
              //CONTENT COLUMN, strip leading and trailing whitespace
              data+='<div class="'+settings.prefix+columns[col_count]+'">'+element.replace(/^\s\s*/, '').replace(/\s\s*$/, '')+'</div>\r\n'; 
            }   
            col_count++;
          });
          if(tr_count != 0){
            output+='<div class="'+settings.prefix+tr_count+'">';
            output+= data;
            output+= '</div>';
            data = "";
          }
          tr_count++;     
        });      
        output = '<div class="'+settings.prefix+'container">'+output+'</div>';
        if(settings.target.length > 0){
          $(settings.target).html(output);
        }else{
          $(table_target).before(output);
        }        
      });
    };
  })(jQuery);
  