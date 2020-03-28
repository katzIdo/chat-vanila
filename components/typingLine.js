
export const typingLine = (data) => {
 return `<div class='typing'>
          ${(data.length === 0)? '' :data.join(', ') + ' typing'}
        </div>`;
}