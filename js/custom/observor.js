/**
 * Priceless PHP iframe Tester
 * jQuery Observor
 *
 * @author      BizLogic <hire@bizlogicdev.com>
 * @copyright   2012 - 2015 BizLogic
 * @link        http://bizlogicdev.com
 * @link		http://pricelessphp.com
 * @license     GNU Affero General Public License v3
 *
 * @since  	    Sunday, March 29, 2015, 15:02 GMT+1
 * @modified    $Date$ $Author$
 * @version     $Id$
 *
 * @category    JavaScript
 * @package     Priceless PHP iframe Tester
*/

$(document).ready(function() {	
	
	$(document).on('keyup', '#frmTargetContent', function(event) {
		var valid			= false;
		var targetUrl		= $.trim( $('#targetUrl').val() );
		var targetHeight	= $('#targetHeight').val();
		var targetWidth		= $('#targetWidth').val();
		
		if( targetUrl.length > 0 && ( parseInt( targetHeight ) > 0 ) && ( parseInt( targetWidth ) > 0 ) ) {
			valid = true;
		}
		
		if( valid ) {
			$('#btnSave').prop('disabled', false);
		} else {
			$('#btnSave').prop('disabled', true);
		}
		
	});
	
	$('#btnSave').click( function(event) {
		event.preventDefault();
		
		var targetHeight	= $('#targetHeight').val(); 
		var targetWidth		= $('#targetWidth').val();
				
		// target URL
		var targetUrl = $.trim( $('#targetUrl').val() );
		
		// set the iframe's dimentions
		$('#iframe-main').css({
			'height': targetHeight,
			'width': targetWidth
		});		
		
		// set the iframe's source
		$('#iframe-main').attr('src', targetUrl);
		
		// hide the form
		$('#frmTargetContent').hide();
		
		// display the iframe
		$('#iframe-container').show();
		
		return false;
	});	
	
});