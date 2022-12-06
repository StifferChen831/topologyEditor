export function swimlaneV(pen, ctx) {
    var path = !ctx ? new Path2D() : ctx;
    var _a = pen.calculative.worldRect, x = _a.x, y = _a.y, width = _a.width, height = _a.height, ex = _a.ex;
    var wr = pen.calculative.borderRadius || 0, hr = wr;
    if (wr < 1) {
        wr = width * wr;
        hr = height * hr;
    }
    var r = wr < hr ? wr : hr;
    if (width < 2 * r) {
        r = width / 2;
    }
    if (height < 2 * r) {
        r = height / 2;
    }
    path.moveTo(x + r, y);
    path.arcTo(x + width, y, x + width, y + height, r);
    path.arcTo(x + width, y + height, x, y + height, r);
    path.arcTo(x, y + height, x, y, r);
    path.arcTo(x, y, x + width, y, r);
    path.closePath();
    //   40 肯定是不合理的，TODO: 该处用高度的部分值
    path.moveTo(x, y + 0.1 * height);
    path.lineTo(ex, y + 0.1 * height);
    if (path instanceof Path2D)
        return path;
}
//# sourceMappingURL=swimlaneV.js.map