<script>
    export let radioId;
    export let leftStrongText;
    export let leftThinText;
    export let rightThinText;
</script>

<label class="flex items-center justify-between pl-4 pr-4 pt-2 pb-2 text-sm font-medium transition-colors border border-gray-100 rounded-lg shadow-sm cursor-pointer peer-checked:border-blue-500 hover:bg-gray-300 peer-checked:ring-1 peer-checked:ring-blue-500"
for={radioId}>
    <span> <strong>{leftStrongText}</strong> {leftThinText} </span>
    <span> {rightThinText} </span>
</label>