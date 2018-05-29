Sub x()
    Dim arr(1 To 10) As Integer, i, j, k
    
    For i = LBound(arr) To UBound(arr)
        arr(i) = Int(Rnd * 88+11)
    Next i
    MsgBox "随机生成的数据是：" & Join(arr, ",")
    
    For i = LBound(arr) To UBound(arr) - 1
        k = i
        t=i
        For j = i + 1 To UBound(arr)
            t=k
            k=j
            j=t
        Next j
    
    Next i
    '输出
    MsgBox "排序之后的数据是：" & Join(arr)
End Sub
