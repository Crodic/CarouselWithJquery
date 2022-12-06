$(document).ready(function(){
    var index= 0 //Cho thứ tự ban đầu là 0
    var endImgIndex=$('.img-slide:last').attr('data-index') //Lấy index của ảnh cuối cùng
    
    //Khi nhấn Next
    $('.next').click(function(){ 
        if(++index>endImgIndex){ //Nếu index > data-index của ảnh cuối cùng
            index = 0 //Thì gán lại index = 0 để quay về ảnh ban đầu
        }
        
        changeImg(index) //thực hiện thay đổi hình ảnh
    })

    //Khi Nhấn prev
    $('.prev').click(function(){
        if(--index<0){ //Nếu index < 0 (bé hơn vị trí ban đầu)
            index = endImgIndex //Thì gán lại index sẽ bằng ảnh cuối cùng
        }
        changeImg(index) //Thực hiện thay đổi thì ảnh
    })
    
    //Hàm thay đổi hình ảnh
    function changeImg(index){
        $('.img-slide').hide() //Ẩn toàn bộ hình ảnh
        $('.img-slide').eq(index).fadeIn(500) //Ảnh nào có số chỉ eq = index thì sẽ hiện ra
        $('.slider-dot_item').removeClass('active') //Xoá class active khỏi các dot
        $('.slider-dot_item').eq(index).addClass('active') //Gán lại class active cho số chỉ eq = index
        clearInterval(autoNextImg)
        timeNextImg()
    }


    $('.slider-dot_item').click(function(){
        index = $(this).attr('data-index') //Khi click vào các li thì sẽ lấy data-index của li đó gán vào index và tay đổi hình ảnh
        changeImg(index)
    })

    var autoNextImg;
    var timeNextImg=function(){
        autoNextImg = setInterval(function(){
            $('.next').click()
        },8000)
    }
})
