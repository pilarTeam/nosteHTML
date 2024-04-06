$(document).ready(function () {
	// DropDown

	// Dropdown toggle click event
	$(".dropdown-toggle").click(function () {
		var dropdownMenuId = $(this).data("dropdown");
		$("#" + dropdownMenuId).toggleClass("hidden");
	});

	// Document click event to hide dropdowns
	$(document).click(function (e) {
		var target = e.target;
		// Check if the clicked element is not a dropdown toggle button or its parent
		if (
			!$(target).is(".dropdown-toggle") &&
			!$(target).parents().is(".dropdown")
		) {
			$(".dropdown-menu").addClass("hidden"); // Hide all dropdown menus
		}
	});

	// Image Upload
	$("#FileUpload1").change(function (event) {
		var input = event.target;
		var text = $("#text");
		var avatarImage = $("#avatarImage");

		if (input.files && input.files[0]) {
			var reader = new FileReader();
			reader.onload = function (e) {
				avatarImage.attr("src", e.target.result);
				text.addClass("hidden");
				avatarImage.removeClass("hidden");
			};
			reader.readAsDataURL(input.files[0]);
		}
	});
});
