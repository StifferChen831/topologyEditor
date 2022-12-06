// 此方法只能绘制路径，在该图形不适用
// export function activityFinal(pen: Pen): Path2D {
//   const path1 = new Path2D();
//   const worldRect = pen.calculative.worldRect;
//   path1.ellipse(
//     worldRect.x + worldRect.width / 2,
//     worldRect.y + worldRect.height / 2,
//     worldRect.width / 2,
//     worldRect.height / 2,
//     0,
//     0,
//     Math.PI * 2
//   );
//   const path2 = new Path2D();
//   path2.ellipse(
//     worldRect.x + worldRect.width / 2,
//     worldRect.y + worldRect.height / 2,
//     worldRect.width / 4,
//     worldRect.height / 4,
//     0,
//     0,
//     Math.PI * 2
//   );
//   path1.addPath(path2);
//   return path1;
// }
export function activityFinal(ctx, pen) {
    var _a = pen.calculative.worldRect, x = _a.x, y = _a.y, width = _a.width, height = _a.height;
    ctx.beginPath();
    ctx.ellipse(x + width / 2, y + height / 2, width / 2, height / 2, 0, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.fillStyle = ctx.strokeStyle;
    ctx.ellipse(x + width / 2, y + height / 2, width / 4, height / 4, 0, 0, Math.PI * 2);
    ctx.fill();
}
//# sourceMappingURL=final.js.map