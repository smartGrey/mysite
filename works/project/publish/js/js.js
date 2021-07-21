window.onload=function(){
	$('#myfile').change(function() {
        var file = this.files[0];
        var reader = new FileReader();
        reader.onload = function() {
            var url = reader.result;
            setImageURL(url);
        };
        reader.readAsDataURL(file);
        $('#coverpic').submit;
    });
    var image = $("#previewImg")[0];
    function setImageURL(url) {
        image.src = url;
    }
}