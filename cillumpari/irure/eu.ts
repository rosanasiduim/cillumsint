// Define a function to handle media types
function handleMediaType(mediaType: 'video' | 'audio' | 'image') {
  // Depending on the media type, perform an action
  switch (mediaType) {
    case 'video':
      // Handle video-specific logic
      console.log('Playing video...');
      break;
    case 'audio':
      // Handle audio-specific logic
      console.log('Playing audio...');
      break;
    case 'image':
      // Handle image-specific logic
      console.log('Displaying image...');
      break;
    default:
      // This should never happen if types are used correctly
      throw new Error('Unsupported media type');
  }
}

// Example usage of the function with a literal type
handleMediaType('audio'); // Expected output: "Playing audio..."
